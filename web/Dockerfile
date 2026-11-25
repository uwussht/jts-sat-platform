# Built from the repository root (see docker-compose.yml): only the site's own
# files are copied in, so the server code, .env and git history are never served.

# The big question banks lose their explanations to small files fetched when
# one is opened (tools/split_explanations.py); the repository keeps them whole.
FROM python:3.14-alpine AS questions
WORKDIR /work
COPY tools/split_explanations.py ./
COPY js/data/questions ./questions
RUN python split_explanations.py questions

FROM nginx:1.27-alpine
COPY web/nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html admin.html /usr/share/nginx/html/
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY i18n /usr/share/nginx/html/i18n
COPY assets /usr/share/nginx/html/assets
COPY --from=questions /work/questions /usr/share/nginx/html/js/data/questions
