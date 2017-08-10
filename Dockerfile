FROM node:6.9.5

COPY . /var/www
RUN cd /var/www \
    && npm install --global rimraf \
    && npm run clean \
    && npm install --global webpack webpack-dev-server typescript@2.1.5 \
    && npm install \
    && npm run prebuild:prod && npm run build:prod

EXPOSE 3000

WORKDIR /var/www
ENTRYPOINT ["npm", "run", "server:prod"]
