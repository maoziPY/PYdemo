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
				res.end(JSON.stringify({
					result: 'ok',
					data: {
						user: response.username == 'admin' ? 'admin' : 'guest'
					}
				}));
			}
		}
		res.end(JSON.stringify({result: 'error'}));
	});
});

app.get('/getData', function(req, res) {
	response = {
		tableName: req.query.tableName
	};

	user.getData(response.tableName, function(err, data) {
		user.getComment(response.tableName, function(err, commentData) {
			res.end(JSON.stringify({
				result: 'ok',
				rows: commentData,
				data: data
			}));
		});
	});
});

app.get('/delData', function(req, res) {
	response = {
		tableName: req.query.tableName,
		id: req.query.id
	};

	user.deleteData(response.tableName, response.id, function(err, data) {
		res.end(JSON.stringify({
			result: 'ok',
			data: data
		}));
	});
});

//编辑数据
app.get('/editData', function(req, res) {
	user.editData(req.query, function(err, data) {
		res.end(JSON.stringify({
			result: 'ok',
			data: data
		}));
	});
});

app.use(express.static('public'));

var server = app.listen(8081, function() {

	var host = server.address().address;
	var port = server.address().port;

	console.log(__dirname);

	console.log('应用实例， 访问地址为http://%s:%s', host , port);
});