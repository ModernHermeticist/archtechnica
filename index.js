var http = require('http');
var path = require('path');
var fs = require('fs');

var port=process.env.PORT || 3000

/*http.createServer(function (req, res) 
{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome to ArchTechnica\nThis site is currently under construction\nIt will eventually host all of my personal projects.');
}).listen(port);
*/
http.createServer(handleRequest).listen(port);

console.log("Server running on port " + port);

function handleRequest(req, res)
{
    var pathname = req.url;

    if (pathname == '/')
    {
        pathname = '/index.html';
    }

    var ext = path.extname(pathname);

    const typeExt = {
        '.html': 'text/html',
        '.js':   'text/javascript',
        '.css':  'text/css'
    };

    var contentType = typeExt[ext] || 'text/plain';

    fs.readFile(__dirname + pathname,
        function(err, data)
        {
            if (err) 
            {
                res.writeHead(500);
                return res.end('Error loading ' + pathname);
            }
            res.writeHead(200, {'Content-Type': contentType});
            res.end(data);
        }
    );
}