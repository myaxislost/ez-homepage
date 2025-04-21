FROM node:23-slim

WORKDIR /app
COPY dist/ .
RUN npm install -g serve

EXPOSE 5858
CMD ["serve", "-s", ".", "-l", "5858"]