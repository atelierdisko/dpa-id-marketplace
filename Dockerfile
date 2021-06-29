FROM node:14-alpine as node

WORKDIR /app
COPY . /app

RUN npm install && npm run build && npm run export

FROM nginx:1.21.0-alpine

WORKDIR /var/www

COPY --from=node /app/out /var/www/
COPY _docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80