FROM node:lts-alpine AS build

WORKDIR /srv/app

COPY . .

RUN apk add -vu \
    curl \
    alpine-sdk

RUN npm install

RUN npm install -g \
    nodemon \
    knex

CMD ["nodemon", "index"]

FROM node:lts-alpine AS release

WORKDIR /srv/app

COPY --from=build /srv/app .

RUN adduser -DH unprivileged

USER unprivileged

CMD ["node", "index"]
