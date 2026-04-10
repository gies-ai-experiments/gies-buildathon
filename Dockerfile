# syntax=docker/dockerfile:1.7
FROM node:22-alpine AS api-deps
WORKDIR /opt/champion-chat-api
COPY api/package.json api/package-lock.json* ./
RUN npm ci --omit=dev

FROM nginxinc/nginx-unprivileged:1.27-alpine

USER root

# Install Node.js runtime
RUN apk add --no-cache nodejs

# Copy nginx static site
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY index.html ./
COPY champion-chat.html ./
COPY assets ./assets
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy API sidecar
COPY --from=api-deps /opt/champion-chat-api/node_modules /opt/champion-chat-api/node_modules
COPY api/server.js api/system-prompt.js api/package.json /opt/champion-chat-api/

# Copy entrypoint
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

RUN chown -R 101:101 /usr/share/nginx/html /opt/champion-chat-api

USER 101

EXPOSE 8080

ENTRYPOINT ["/entrypoint.sh"]

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/ || exit 1
