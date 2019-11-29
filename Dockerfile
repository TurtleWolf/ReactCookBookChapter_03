# FROM node:10.13-alpine
FROM node:12.2.0-alpine
# add `/app/node_modules/.bin` to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH
ENV NODE_ENV production
# Update & Install theses apps.
# RUN apt-get update && apt-get upgrade -y && apt-get install -y rsync
WORKDIR /usr/src/app/socket-server
COPY ["socket-server/package.json", "./"]
RUN npm install --production && mv node_modules ../
COPY socket-server .
WORKDIR /usr/src/app/client-cra
COPY ["client-cra/package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN (cd node_modules && tar c .) | (cd ../ && tar xf -)
# RUN npm install --production && rsync -a node_modules ../
RUN npm install --production && (cd ../node_modules && tar c .) | (cd ../ && tar xf -)
# && npm install --production --prefix ./src/socketzen
RUN npm install react-scripts@3.0.1 -g
COPY client-cra .
EXPOSE 3000
EXPOSE 5000
WORKDIR /usr/src/app/client-cra
CMD npm run concurzen