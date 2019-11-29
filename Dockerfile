# FROM node:10.13-alpine
FROM node:12.2.0-alpine
# add `/app/node_modules/.bin` to $PATH
# ENV PATH /usr/src/app/node_modules/.bin:$PATH
ENV NODE_ENV production
WORKDIR /usr/src/app/
RUN npm install react-scripts@3.0.1 -g
COPY ["client-cra/package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production 
COPY . .
EXPOSE 3000
EXPOSE 5000
CMD npm run concurzen