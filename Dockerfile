FROM node:10.13-alpine
# FROM node:12.2.0-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production && mv node_modules ../ && npm install --production --prefix ./src/socketzen
RUN npm install react-scripts@3.0.1 -g
COPY . .
EXPOSE 3000
EXPOSE 5000
CMD npm run concurzen