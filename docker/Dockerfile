FROM node:18.16.0 AS builder
COPY .. /build

ENV NODE_ENV=production
WORKDIR /build

RUN yarn --immutable
RUN yarn build

# TODO switch to nginx image
# TODO add nginx config
# TODO run nginx with config
FROM nginx:1.24.0

COPY --from=builder /build/dist /app/
COPY ./docker/listr.conf /etc/nginx/conf.d/default.conf
WORKDIR /app
