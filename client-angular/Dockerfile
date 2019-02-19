FROM node:latest
RUN mkdir -p /app/angular
WORKDIR /app/angular
COPY package.json /app/angular
RUN npm install --quiet
COPY . /app/angular