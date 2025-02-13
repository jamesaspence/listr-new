FROM node:22.13.1 AS builder
COPY .. /build

ENV NODE_ENV=production
WORKDIR /build

RUN yarn --immutable
RUN yarn build

FROM nginx:1.26.3

COPY --from=builder /build/dist /app/
COPY ./docker/listr.conf /etc/nginx/conf.d/default.conf
WORKDIR /app
