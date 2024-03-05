const http = require('http');

//SERVER SETUP
//(req = request) and (res = response)
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our homepage');
    }
    if(req.url === '/about'){
        res.end('ABOUt page');
    }
    res.end(`
    <h1>OOPS!</h1>
    <p>We dont have a page you are looking for</p>
    <a href = "/">GO TO HOME PAGE</a>
    `)
});

server.listen(5000);