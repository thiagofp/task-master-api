FROM node:14

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install --package-lock-only

EXPOSE 3000

CMD [ "npm", "start" ]

#Mongo
FROM mongo:latest
ENV MONGO_INITDB_ROOT_USERNAME=myuser
ENV MONGO_INITDB_ROOT_PASSWORD=mypassword
ENV MONGO_INITDB_DATABASE=mydb

EXPOSE 27017

CMD ["mongod"]

