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

// 获取用户信息
User.getUserbyUsername = function(username, callback) {
	var par = {
		selectSql: 'select * from user where username = ?',
		arr: [username],
		callback: callback
	};
	this.query(par);
};

// 获取表数据
User.getData = function(tableName, callback) {
	var par = {
		selectSql: 'select * from ' + tableName + ';',
		arr: [],
		callback: callback
	};
	this.query(par);
};

// 删除数据
User.deleteData = function(tableName, id, callback) {
	var par = {
		selectSql: 'delete from '+ tableName +' where id = ?',
		arr: [id],
		callback: callback
	};
	this.query(par);
};

// 编辑数据
User.editData = function(par, callback) {
	var str = '';
	for(var x in par.newData) {
		str += (' ' + x+'='+"'"+par.newData[x]+"'");
	}

	var par = {
		selectSql: 'update '+ par.tableName +' set'+ str +' where id = ?',
		arr: [par.selectData.id],
		callback: callback
	};
	console.log(par);
	this.query(par);
};

// 获取注释
User.getComment = function(tableName, callback) {
	var par = {
		selectSql: 'show full columns from '+ tableName +';',
		arr: [],
		callback: callback
	};
	this.query(par);
};

// 查询主体
User.query = function(par) {

	var queryCallback = function(err, res) {
		if (err) {
			console.log('getUserbyUsername err:' + err);
			return;
		}
		par.callback(err, res);
	};

	connection.query(par.selectSql, par.arr, queryCallback);
}

module.exports = User;