FROM node:10 as node
COPY . /build1
WORKDIR /build1
RUN npm i
ENTRYPOINT ["/usr/local/bin/npm", "start"]
