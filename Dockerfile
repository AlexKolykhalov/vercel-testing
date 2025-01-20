FROM node:22

WORKDIR /work

COPY . .

RUN npm install && npm run build

WORKDIR dist

CMD [ "node", "index.js" ]