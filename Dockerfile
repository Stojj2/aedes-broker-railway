
FROM node:18

WORKDIR /app

RUN apt update && apt install -y nginx

COPY package*.json ./
RUN npm install

COPY . .

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
CMD service nginx start && node server.js
