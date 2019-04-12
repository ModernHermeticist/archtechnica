var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to ArchTechnica\nThis site is currently under construction\nIt will eventually host all of my personal projects.');
}).listen(process.env.PORT);  