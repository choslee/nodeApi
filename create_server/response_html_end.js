// Url početnog zahteva = http://localhost:3000"

const http = require('http');
const { parse } = require('querystring');
const server = http.createServer((request, response) => {
    const { method, url } = request
    if (method === "GET" && url==="/") {
        response.setHeader("Content-Type", "text/html")
        response.statusCode = 200
        return response.end(`<!doctype html>
          <html>
          <body>
              <form action="/message" method="post" _lpchecked="1">
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
    if (method === 'POST' && url==="/message") {
        const FORM_URLENCODED = 'application/x-www-form-urlencoded';
        if(request.headers['content-type'] === FORM_URLENCODED) {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            let body = '';
            request.on('data', chunk => {
                body += chunk.toString();
            });
            request.on('end', () => {
                console.log(parse(body)
                );
                return response.end('Preuzeli smo vaše poslate podatke');
            });
        }
    }
  }
)
server.listen(3000);