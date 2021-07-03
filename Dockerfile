
# Node server
FROM node:12-alpine as node-server
WORKDIR /src/
COPY ["package.json", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY server.js .
COPY /server /usr/src/app/server

# Final image
FROM node:12-alpine
WORKDIR /usr/src/app
COPY --from=node-server /usr/src /usr/src
COPY --from=client-app /usr/src/app/dist ./
EXPOSE 3000
# CMD ["node", "server.js"]
CMD ["npm", "start"]
