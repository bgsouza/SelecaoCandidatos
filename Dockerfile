FROM node:10

# Create app directory  
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm Install

# Bundle app source
COPY . .

# Run app
EXPOSE 5000
CMD [ "npm", "start" ]