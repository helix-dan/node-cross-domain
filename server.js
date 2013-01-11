var http = require('http');
var url = require('url');

http.createServer(function(request, response){
        var options = {
        host: 'www.xxx.com',
        port: 8080,
        path: request.url,
        Connection: "keep-alive"
    };

        var result_chunk = "";
        var string_chunk = "";

        var remoteReq = http.request(options,function(remoteRes){
                response.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});
                remoteRes.on('data',function(chunk){
                        // if the response too long, it will be run this mang one by one times until get all response
                        string_chunk += chunk.toString('utf8');
                });

                remoteRes.on('end',function(){
                        // return tht format that i want
                        result_chunk = string_chunk.match(/\<return\>\[(.*)\]\<\/return\>/);
                    
                        console.log(string_chunk);
                        console.log(result_chunk);

                        result_chunk = 'trainStation({"list":[' + result_chunk[1] + ']});';
                        response.write(result_chunk);
                        result_chunk = "";
                        string_chunk = "";
                        response.end();
                });
        });

        remoteReq.end();

}).listen(8081);

console.log('server start on localhost');
