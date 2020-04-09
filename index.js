const http = require('http');
const hostname = '127.0.0.1'; //also known as local hot
const port = 3000; //port website biasanya 80 atau 8000
//untuk menghindari bentrok dengan yang sudah memakai port 80
//maka pakai port 3000

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('content-Type', 'text/plain')
    response.end('Hi can nodejs')
});

server.listen(port, hostname,() => {
    console.log(`server is running at ${hostname}:${port}`);
    
})
