//http://localhost:3000/neki_slug

const http = require('http');
const server = http.createServer((request, response) => {
    const { method, url } = request
  
    if (method === "GET" && url === "/neki_slug") {
        response.setHeader("Content-Type", "text/html")
        response.statusCode = 200
        response.end(
          `<!doctype html>
            <html>
            <body>
                <h2>Ovo je title</h2>
                <p>Ovo je neki tekst</p>
            </body>
            </html>`
        )
    }
  }
)
server.listen(3000);