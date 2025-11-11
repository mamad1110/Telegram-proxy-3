# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy files
COPY package*.json ./
COPY server.js ./

# Install dependencies
RUN npm install

# Expose port
EXPOSE 10000

# Start app
CMD ["npm", "start"]
