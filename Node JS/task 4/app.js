const http = require('http');

function reqListener(req,res){
    console.log("rohit");
}
var x=20;

const server = http.createServer(reqListener);
server.listen(4000);

