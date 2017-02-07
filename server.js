var express = require('express');

var server = express();
server.use(express.static(__dirname + '/staging'));

server.get('/psk*', function(req, res){
    console.log('req: ' + req);
    console.log('res: ' + res);
    res.sendFile(__dirname + '/staging/index.html');
});

var port = 8000;
server.listen(port, function() {
    console.log('server listening on port ' + port);
});