var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    if( pathname == '/wait' ){
        cp.exec('node block.js', myCallback);
    }
    else{
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('No more cages!\n');
        response.end();
    }

    console.log('New connection');

    function myCallback(){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Thanks for waiting!\n');
        response.end();
    }
}
http.createServer(onRequest).listen(8080);
console.log('Server started');