let http = require('http');
let fs = require('fs');
const port = 3000;


const server =  http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('./index.html', 'utf8', function (error, data) {

            if (error) {
                res.writeHead(404);
                res.write('Whoops! File not found!');
            } else {
                res.write(data);
            }      
        res.end();
    });
})

server.listen(port, (error)=>{
    if(error){
        console.log("something went wrong", error)
    }else{
        console.log(`server is listening on port ${port}`)
    }
})