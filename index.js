const http = require('http');

const server = http.createServer(function(req, res){
    
    res.setHeader("Content-type", "application/json");
    res.setHeader("Access-Control-Allow-Origin-Header", "*");
    res.writeHead(200);

    let dataObj = {"slackUsername": "Alamin Abubakar", "backend":true, "age":23, "bio": "Currently a frontend developer on my way to becoming a fullstack dev"};

    let data = JSON.stringify(dataObj);
    res.end(data);
});


server.listen(1234, function(){
    console.log("Listening on 1234");
})