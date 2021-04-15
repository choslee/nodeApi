const http = require('http');

http.createServer((request, response) => {
  const { headers, method, url } = request;
    if (method === "GET") {
        response.setHeader("Content-Type", "text/html")
        response.statusCode = 200
        response.end(`<!doctype html>
            <html>
            <body>
                <form action="/" method="post" _lpchecked="1">
                <p>Unesi ime:</p>
                <input type="text" name="fname"><br>
                <p>Unesi godine:</p>
                <input type="number" name="age"><br>
                <p>Izaberi fotografiju:</p>
                <input type="file" name="photo"><br><br>
                <button>Save</button>
            </form>
            </body>
            </html>
        `)
    }
    if (request.method === 'POST') {
        let body = [];
        request.on('error', (err) => {
          console.error(err);
        }).on('data', (chunk) => {
          body.push(chunk);
        }).on('end', () => {
          body = Buffer.concat(body).toString();
          response.on('error', (err) => {
            console.error(err);
          });
          response.statusCode = 200;
          response.setHeader('Content-Type', 'application/json');
          const responseBody = { headers, method, url, body };

           // Note: the 2 lines below could be replaced with this next one:  response.end(JSON.stringify(responseBody))
          response.write(JSON.stringify(responseBody));
          response.end();
        });
    }
}).listen(3000);