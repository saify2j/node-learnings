FROM node:10
WORKDIR /usr/src/app
RUN npm i nodemon -g
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["nodemon", "app.js"]