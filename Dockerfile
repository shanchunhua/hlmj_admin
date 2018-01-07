#FROM node:6.9.5
FROM hlmj_admin_ui:1.4
COPY . /var/www
RUN cd /var/www \
    && npm config set registry https://registry.npm.taobao.org \
    && npm install --global rimraf \
    && npm install --global webpack webpack-dev-server typescript@2.1.5 \
    && npm install \
    && npm rebuild node-sass \
    && npm run prebuild:prod && npm run build:prod
#RUN npm run prebuild:prod && npm run build:prod
EXPOSE 3000

WORKDIR /var/www
ENTRYPOINT ["npm", "run", "server:prod"]
