# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the current directory contents into the container
COPY . .

# Make the container's port 3000 available to the outside
EXPOSE 3000

# Run the NestJS application
CMD ["npm", "run", "start:prod"]
