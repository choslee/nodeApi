//http://localhost:3000/neki_slug


// const http = require('http');
// const server = http.createServer((request, response) => {
//     const { method, url, headers } = request

//     if (request.method === "GET" && request.url === "/neki_slug") {
//       response.statusCode = 200
//       response.setHeader("Content-Type", "application/json")
//       const responseBody = {
//         headers,
//         method,
//         url,
//         body: ["Neki odgovor"]
//       }

//       response.write(JSON.stringify(responseBody))
//       response.end()
//     }
//   }
// )
// server.listen(3000);





// const http = require('http');
// const server = http.createServer((request, response) => {
//     const { method, url, headers } = request
//     const responseBody = {
//       headers,
//       method,
//       url,
//       body: ["Neki odgovor"]
//     }

//     if (request.method === "GET" && request.url === "/neki_slug") {
//       response.statusCode = 200
//       response.setHeader("Content-Type", "application/json")
//       response.write(JSON.stringify(responseBody))
//       response.end()
//     }
//   }
// );
// server.listen(3000);





const http = require('http');
const server = http.createServer((request, response) => {
    let headers = request.headers;
    let method = request.method;
    let url = request.url;
   
    if (method === "GET" && url === "/") {
      
      // console.log(request.url + "\n");
      // console.log(request.headers + "\n");
      console.log(request); 
      
      //hendle response

    }
  }
)
server.listen(3000);