#stage 1
FROM node:latest
RUN mkdir -p /app/client-angular
WORKDIR /app/client-angular
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run start