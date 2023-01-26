FROM node:16-alpine

WORKDIR /mogul-burhanuddin

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3005

CMD ["npm", "run", "dev"]