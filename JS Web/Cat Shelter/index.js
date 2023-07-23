const http = require('http');
const port = 3000;
const handlers = require('./handlers/index')

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  
  for(let handler of handlers){
    if(!handler(req,res)){
      break;
    }
  }
}).listen(port)