var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.sendFile( __dirname + '/public/views/index/' + 'index.html');
});

app.get('/login', function(req, res) {
	res.sendFile( __dirname + '/public/views/login/' + 'index.html');
});

app.use(express.static('public'));

var server = app.listen(8081, function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log(__dirname);

	console.log('应用实例， 访问地址为http://%s:%s', host , port);
});