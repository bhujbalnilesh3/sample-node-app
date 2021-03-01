FROM node:10
WORKDIR /home/default
COPY ./package.json /home/default/package.json
RUN npm install -q
COPY . /home/default
EXPOSE 8080
CMD ["npm", "start"]
