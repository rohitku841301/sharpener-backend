const http = require('http');

function reqListener(req,res){
    console.log("rohit");
}

const server = http.createServer(reqListener);
server.listen(4000);

