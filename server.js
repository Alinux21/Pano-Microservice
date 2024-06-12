const http = require('http');
const PORT = 5050;
const panoRouter = require('./Routes/panoRouter');

const server = http.createServer((req, res) => {

    panoRouter(req, res);

});

server.listen(5050, () => {
    console.log('Server is running on port 5050');
});
