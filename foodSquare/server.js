var express = require('express');
var app = express();
var user = require('./models/user');

app.get('/', function(req, res) {
	res.sendFile( __dirname + '/public/views/index/' + 'index.html');
});

app.get('/login', function(req, res) {
	res.sendFile( __dirname + '/public/views/login/' + 'index.html');
});

app.get('/admin', function(req, res) {
	res.sendFile( __dirname + '/public/views/admin/' + 'index.html');
});

app.get('/checkUser', function(req, res) {
	response = {
		username: req.query.username,
		password: req.query.password
	};

	user.getUserbyUsername(response.username, function(err, data) {
		for(var i=0, len=data.length; i<len; i++) {
			if (response.username == data[i].username && response.password == data[i].password) {
				res.end(JSON.stringify({result: 'ok'}));
			}
		}
		res.end(JSON.stringify({result: 'error'}));
	});
});

app.use(express.static('public'));

var server = app.listen(8081, function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log(__dirname);

	console.log('应用实例， 访问地址为http://%s:%s', host , port);
});