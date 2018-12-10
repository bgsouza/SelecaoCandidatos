FROM node:10

MAINTAINER Bruno Gomes de Souza

# Create app directory  
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Run app
EXPOSE 5000
CMD [ "npm", "start" ]