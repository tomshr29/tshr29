FROM node:23-alpine AS base

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --production

COPY . .

RUN npm run build

EXPOSE 3333

CMD ["node", "bin/server.js"]