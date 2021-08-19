FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
# For production
# RUN npm ci --only=production

# Copy app source
COPY . .

# Expose ports
EXPOSE 50123

# Execute command
CMD [ "npm", "start" ]
