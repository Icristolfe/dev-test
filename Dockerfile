FROM node:19
WORKDIR /app
COPY package.json .
RUN yarn
EXPOSE 4000
COPY . .
