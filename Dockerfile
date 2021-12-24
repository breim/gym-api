FROM node:14-alpine3.13 as build

ENV HOME=/home/app/webapp
WORKDIR $HOME

COPY package.json ./
RUN yarn install

ADD . /home/app/webapp
# COPY . /home/app
RUN yarn run build
RUN cd build
RUN yarn install --production

EXPOSE 80
CMD ["node", "server.js"]
