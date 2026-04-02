# syntax=docker/dockerfile:1.7
FROM nginxinc/nginx-unprivileged:1.27-alpine

USER root
WORKDIR /usr/share/nginx/html

# Keep image contents minimal and copy only static site assets.
RUN rm -rf ./*
COPY index.html ./
COPY assets ./assets
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN chown -R 101:101 /usr/share/nginx/html

USER 101

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/ || exit 1
