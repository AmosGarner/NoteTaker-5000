# Your a wizard Henry!!
#stage 1
FROM node:latest
RUN mkdir -p /app/angular
WORKDIR /app/angular
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

#stage 2
FROM nginx:1.13
COPY --from=node /app/dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf