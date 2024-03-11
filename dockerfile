# Use official Node.js image as base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /src/server

# Copy package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build TypeScript code
RUN npm run build

# Expose the port your app runs on
EXPOSE 9000

# Command to run your application
CMD [ "npm", "run", "dev" ]
