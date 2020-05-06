# pull official base image
FROM node:10-alpine

# set working directory
WORKDIR /app

RUN npm install -g nodemon

COPY package.json ./
COPY package-lock.json ./

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
RUN npm install --silent

# add app
COPY . ./

ENV PORT 80

EXPOSE 80

CMD ["nodemon", "index.js"]
