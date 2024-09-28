docker pull mongo:latest
docker run --name mongodb -d -p 27017:27017 -v data:/data/db mongo:latest
