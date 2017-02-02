var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname + '/staging')).listen((process.env.PORT || 5000), function(){
    console.log('Server running on ' + (process.env.PORT || 5000) + '...');
});