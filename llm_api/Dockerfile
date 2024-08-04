FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

CMD [ "npx", "ts-node", "src/server.ts" ]