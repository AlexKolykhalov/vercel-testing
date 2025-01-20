FROM node:22

ARG NODE_ENV

WORKDIR /work

COPY . .

RUN npm install && npm run build

WORKDIR dist

RUN npm init -y

ENV NODE_ENV=${NODE_ENV}

CMD [ "node", "index.js" ]