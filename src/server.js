const http = require('http');
const url = require('url');
const responseHandler = require('./responses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {

};

const onRequest = (request, response) => {

};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
