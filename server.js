var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname + '/staging')).listen(8080, function(){
    console.log('Server running on 8080...');
});