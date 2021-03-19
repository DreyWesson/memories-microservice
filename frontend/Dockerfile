FROM node:14-alpine3.10 as builder

LABEL version="1.0"
LABEL description="Frontend Production image for the Memories-MicroService App"

USER node
WORKDIR /app

COPY ./package.json ./
COPY --chown=node:node . /app

RUN npm install

COPY . .

RUN npm run build

FROM nginx

EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html