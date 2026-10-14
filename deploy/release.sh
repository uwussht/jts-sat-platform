#!/usr/bin/env bash
set -euo pipefail

image=${1:?Image is required}
registry_user=${2:?Registry username is required}
if [[ ! "$image" =~ ^ghcr\.io/uwussht/jts-sat-platform:sha-[0-9a-f]{40}$ ]]; then
  echo 'Expected a commit-specific SAT image tag.' >&2
  exit 1
fi

site_dir=/opt/jts-sat
release_dir=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)
compose_file="$release_dir/docker-compose.prod.yaml"
cd "$site_dir"
# Serialize deployments even if two separate workflows reach the server.
exec 9>"$site_dir/.deploy.lock"
flock -w 600 9

# The workflow sends its short-lived registry token over encrypted stdin.
IFS= read -r registry_token
export DOCKER_CONFIG
DOCKER_CONFIG=$(mktemp -d)
trap 'rm -rf -- "$DOCKER_CONFIG"' EXIT
printf '%s' "$registry_token" | docker login ghcr.io -u "$registry_user" --password-stdin
unset registry_token

container=$(docker ps -aq --filter label=com.docker.compose.project=jts-sat --filter label=com.docker.compose.service=web)
previous_image=
if [[ -n "$container" ]]; then
  # Save the actual local image ID, also covering the first manual deployment.
  previous_image=$(docker inspect --format '{{.Image}}' "$container")
fi

export SAT_IMAGE="$image"
compose=(docker compose -p jts-sat --project-directory "$site_dir" -f "$compose_file")
# Pull first: an unavailable image must not disturb the running container.
"${compose[@]}" pull web

check_site() {
  local endpoint
  for endpoint in / /js/core.js /css/core.css /js/data/questions/index.json /js/data/lessons/index.json /js/data/papers/index.json; do
    curl --fail --silent --show-error --max-time 15 --output /dev/null "http://127.0.0.1:8085$endpoint" || return 1
  done
}

if "${compose[@]}" up -d --no-build --pull never --wait --wait-timeout 120 web && check_site; then
  printf 'SAT_IMAGE=%s\n' "$image" > "$site_dir/.env.next"
  mv "$site_dir/.env.next" "$site_dir/.env"
  cp "$compose_file" "$site_dir/docker-compose.prod.yaml"
  echo "Deployed $image"
else
  echo 'Deployment failed; restoring the previous container image.' >&2
  if [[ -n "$previous_image" ]]; then
    export SAT_IMAGE="$previous_image"
    "${compose[@]}" up -d --no-build --pull never --wait --wait-timeout 120 web
    echo "Restored $previous_image" >&2
  fi
  exit 1
fi
