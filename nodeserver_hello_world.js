let http = require('http');

http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.end("Hello World using node server");
}).listen(8099);

console.log('Server running at http://127.0.0.1:8099/');
