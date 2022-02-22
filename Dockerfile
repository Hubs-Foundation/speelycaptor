FROM node:lts-alpine
# FROM node:lts-buster
WORKDIR /app

COPY package.json package-lock.json /app
RUN npm ci
RUN npm install express
RUN npm install aws-sdk

COPY app.js index.js /app
CMD node app.js