var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'demo'
});

function User(user) {
	this.username = user.username;
	this.password = user.password;
}

User.getUserbyUsername = function(username, callback) {
	var selectSql = 'select * from user where username = ?';
	connection.query(selectSql, [username], function(err, res) {
		if (err) {
			console.log('getUserbyUsername err:' + err);
			return;
		} 
		callback(err, res);
	});
};

User.getData = function(database, callback) {
	var selectSql = 'select * from ' + database + ';';
	connection.query(selectSql, [], function(err, res) {
		if (err) {
			console.log('err: ' + err);
			return;
		}
		callback(err, res);
	});
};

module.exports = User;