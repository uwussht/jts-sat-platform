# Built from the repository root (see docker-compose.yml) so the API can load
# js/shared/plan-engine.js — the same plan code the browser runs.
FROM node:20-alpine
ENV NODE_ENV=production
WORKDIR /app/server
COPY server/package.json ./
RUN npm install --omit=dev --no-audit --no-fund
COPY server/src ./src
COPY js/shared /app/js/shared
USER node
EXPOSE 3000
CMD ["node", "src/index.js"]
