# syntax=docker/dockerfile:1.7
FROM nginxinc/nginx-unprivileged:1.27-alpine

WORKDIR /usr/share/nginx/html

# Keep image contents minimal and copy only static site assets.
RUN rm -rf ./*
COPY --chown=101:101 index.html ./
COPY --chown=101:101 assets ./assets
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/ || exit 1
