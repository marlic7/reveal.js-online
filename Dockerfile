FROM node:8.16.2-alpine

RUN mkdir /app

COPY package.json /app/

RUN cd /app \
    npm install \
    npm clean cache --force

COPY . /app/
WORKDIR /app

EXPOSE 8001

CMD ["npm", "run", "start-dev"]