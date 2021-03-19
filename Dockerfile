FROM node:14-alpine3.10

USER node

LABEL version="1.0"
LABEL description="Backend Production image for the Memories-MicroService App"

WORKDIR /app

COPY ["package.json","package-lock.json", "./"]
COPY --chown=node:node . ./app

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]