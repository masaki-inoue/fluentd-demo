FROM node:16-alpine3.14

WORKDIR /app

COPY package*.json /app/

RUN npm ci

COPY index.js /app/index.js

CMD ["node", "index.js"]