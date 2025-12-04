# Gunakan image Node.js resmi
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json & package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua source code
COPY . .

# Set environment variable (bisa override di docker run)
ENV PORT=3000

# Expose port
EXPOSE 3000

# Jalankan aplikasii
CMD ["node", "index.js"]
