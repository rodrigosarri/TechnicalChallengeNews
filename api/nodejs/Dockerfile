FROM node:lts

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN cp src/swagger.json dist/

EXPOSE 3001
CMD [ "node", "dist/index.js" ]
