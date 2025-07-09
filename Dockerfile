FROM quay.io/teamolduser/docker

RUN apt update && apt upgrade -y
COPY . /root/fp
WORKDIR /root/fp
RUN yarn install
EXPOSE 10000
CMD ["yarn", "start"]