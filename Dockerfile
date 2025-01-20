FROM node:22

WORKDIR /work

COPY . .

RUN npm install && npm run build

WORKDIR dist

RUN npm init -y

CMD [ "node", "index.js" ]