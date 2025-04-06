FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8081
EXPOSE 1883
CMD ["npm", "start"]
