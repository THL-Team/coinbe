# Stage 1: Build the application
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install app dependencies
COPY . .
RUN npm install
RUN npm run build
# COPY .env .env

# Expose the port the app runs on
EXPOSE 8888:8888

# Command to run the application
CMD ["node", "dist/main"]

# docker build -t order-app .