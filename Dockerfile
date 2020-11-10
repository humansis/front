FROM node:12-alpine

RUN apk update
RUN apk add git

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . ./

EXPOSE 4200

CMD ["yarn", "serve"]
