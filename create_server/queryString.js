var http = require('http');
var url = require('url');

var server = http.createServer(function (request, response) {
  var queryData = url.parse(request.url, true).query;
  response.writeHead(200, {"Content-Type": "text/plain"});
  if (queryData.name) {
    // odgovor ukoliko u url-u postoji promenjiva "name" npr. http://host:8000/?name=Pera
    response.end('Zdravo ' + queryData.name + '\n');
  } else {
    response.end("Hello World\n");
  }
});

server.listen(3000);