FROM python:3.14-alpine AS build
WORKDIR /app
COPY tools/build.py tools/stamp_assets.py ./tools/
COPY index.html ./
COPY css/ ./css/
COPY js/ ./js/
COPY i18n/ ./i18n/
COPY assets/ ./assets/
RUN python tools/build.py

FROM nginx:stable-alpine
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/ /usr/share/nginx/html/
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1
