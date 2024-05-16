FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Build the Next.js application for production
RUN npm run build

RUN run npm dev

EXPOSE 3000

CMD ["npm", "run", "start"]
