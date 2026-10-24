#!/usr/bin/env bash
# One release on the server: the site (web), the API (api) and, the first
# time, the database (db). The database is never replaced or removed here:
# its data is the named volume jts-sat_db-data, and it is backed up before
# every release into /opt/jts-sat/backups.
set -euo pipefail

image=${1:?Image is required}
registry_user=${2:?Registry username is required}
api_image=${3:?API image is required}
admin_phones=${4:-}
if [[ ! "$image" =~ ^ghcr\.io/uwussht/jts-sat-platform:sha-[0-9a-f]{40}$ ]]; then
  echo 'Expected a commit-specific SAT image tag.' >&2
  exit 1
fi
if [[ ! "$api_image" =~ ^ghcr\.io/uwussht/jts-sat-platform:api-sha-[0-9a-f]{40}$ ]]; then
  echo 'Expected a commit-specific SAT API image tag.' >&2
  exit 1
fi

site_dir=/opt/jts-sat
release_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
compose_file="$release_dir/docker-compose.prod.yaml"
cd "$site_dir"
# Serialize deployments even if two separate workflows reach the server.
exec 9>"$site_dir/.deploy.lock"
flock -w 600 9

# Secrets, made once and kept: a new password would lock the API out of the
# database that the existing volume already holds.
secrets="$site_dir/secrets.env"
if [[ ! -s "$secrets" ]]; then
  rand() { head -c 32 /dev/urandom | od -An -tx1 | tr -d ' \n'; }
  db_password=$(rand)
  umask 077
  printf 'POSTGRES_PASSWORD=%s\nPGPASSWORD=%s\nJWT_SECRET=%s\n' "$db_password" "$db_password" "$(rand)$(rand)" > "$secrets.next"
  mv "$secrets.next" "$secrets"
  umask 022
  echo 'Created secrets.env'
fi
chmod 600 "$secrets"

# Admin phones: from the workflow when it sends them, otherwise as they were.
if [[ -z "$admin_phones" && -f "$site_dir/.env" ]]; then
  admin_phones=$(sed -n 's/^ADMIN_PHONES=//p' "$site_dir/.env" | head -n 1)
fi

# The workflow sends its short-lived registry token over encrypted stdin.
IFS= read -r registry_token
export DOCKER_CONFIG
DOCKER_CONFIG=$(mktemp -d)
trap 'rm -rf -- "$DOCKER_CONFIG"' EXIT
printf '%s' "$registry_token" | docker login ghcr.io -u "$registry_user" --password-stdin
unset registry_token

image_of() {
  local container
  container=$(docker ps -aq --filter label=com.docker.compose.project=jts-sat --filter "label=com.docker.compose.service=$1")
  [[ -n "$container" ]] && docker inspect --format '{{.Image}}' "$container" || true
}
previous_image=$(image_of web)
previous_api_image=$(image_of api)

export SAT_IMAGE="$image" SAT_API_IMAGE="$api_image" ADMIN_PHONES="$admin_phones"
compose=(docker compose -p jts-sat --project-directory "$site_dir" -f "$compose_file")
# Pull first: an unavailable image must not disturb the running containers.
"${compose[@]}" pull web api db backup

# Backups are made by the backup service itself (docker-compose.prod.yaml):
# one when it starts — so on every release — and one a day, into
# /opt/jts-sat/backups, kept 14 days. Nothing here runs inside the database
# container: a command exec'd into it ended the deploy's SSH session.
mkdir -p "$site_dir/backups"

check_site() {
  local endpoint
  for endpoint in / /js/core.js /css/core.css /js/data/questions/index.json /js/data/lessons/index.json /js/data/papers/index.json /api/health; do
    curl --fail --silent --show-error --max-time 15 --output /dev/null "http://127.0.0.1:8085$endpoint" || return 1
  done
}

if "${compose[@]}" up -d --no-build --pull never --wait --wait-timeout 180 db api web backup && check_site; then
  {
    printf 'SAT_IMAGE=%s\n' "$image"
    printf 'SAT_API_IMAGE=%s\n' "$api_image"
    printf 'ADMIN_PHONES=%s\n' "$admin_phones"
  } > "$site_dir/.env.next"
  mv "$site_dir/.env.next" "$site_dir/.env"
  cp "$compose_file" "$site_dir/docker-compose.prod.yaml"
  echo "Deployed $image and $api_image"
else
  echo 'Deployment failed; restoring the previous site and API images.' >&2
  # Only web and api go back. The database and its volume are left as they are.
  if [[ -n "$previous_image" ]]; then
    export SAT_IMAGE="$previous_image"
    [[ -n "$previous_api_image" ]] && export SAT_API_IMAGE="$previous_api_image"
    if [[ -n "$previous_api_image" ]]; then
      "${compose[@]}" up -d --no-build --pull never --wait --wait-timeout 180 api web
    else
      "${compose[@]}" stop api || true
      "${compose[@]}" up -d --no-build --pull never --no-deps --wait --wait-timeout 120 web
    fi
    echo "Restored $previous_image" >&2
  fi
  exit 1
fi
