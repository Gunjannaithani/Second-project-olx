let http = require('http');
let fs = require('fs');
let port = 2300;

let server = http.createServer((req,res) => {
    fs.readFile('Category.json','utf-8', function(err,Category){
        if(err) throw err;
        res.write(Category);
        res.end()
    })
})


server.listen(port)