FROM debian:8.7

RUN apt-get -y update && apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs

# Install the application

RUN mkdir /app
ADD package.json /app
ADD app.js /app
RUN cd /app && npm install

# Define command to run the application when the container starts

ENV PORT 80
EXPOSE 80
WORKDIR "/app"
CMD ["npm", "start"]
