#!/bin/sh
# Start Node.js API in background
cd /opt/champion-chat-api
node server.js &

# Start nginx in foreground
nginx -g 'daemon off;'
