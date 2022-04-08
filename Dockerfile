FROM node:lts-alpine AS build

WORKDIR /srv/app

COPY . .

RUN apk add -vu curl

RUN npm install

RUN adduser -DH unprivileged

USER unprivileged

CMD ["node", "index"]
