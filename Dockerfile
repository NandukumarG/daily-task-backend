# 1️⃣ Use official Node.js LTS image
FROM node:20-alpine

# 2️⃣ Set working directory inside container
WORKDIR /app

# 3️⃣ Copy package files first (for caching)
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install --production

# 5️⃣ Copy application source
COPY src ./src

# 6️⃣ Expose app port (documentation purpose)
EXPOSE 5000

# 7️⃣ Start the app
CMD ["npm", "start"]
