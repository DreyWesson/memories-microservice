FROM node:14-alpine

LABEL version="1.0"
LABEL description="Backend Production image for the Memories-MicroService App"

WORKDIR /app

COPY ["package.json","package-lock.json", "./"]

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]