FROM node:14-alpine

LABEL version="1.0"
LABEL description="Development image for the Memories-MicroService App"

WORKDIR /usr/src/app 

COPY ["package.json","package-lock.json","npm-shrinkwrap.json*", "./"]

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]
