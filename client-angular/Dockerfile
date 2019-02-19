#stage 1
FROM node:latest
RUN npm install @angular/cli -g
WORKDIR /app/client-angular
COPY package*.json ./
RUN npm install --quiet
CMD ng serve --port 4200 --host 0.0.0.0 --poll 1