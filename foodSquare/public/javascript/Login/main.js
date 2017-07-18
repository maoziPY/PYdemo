/*var React = require('react');
var ReactDOM = require('react-dom');*/

import React from 'react';
import ReactDOM from 'react-dom';
import '../../resources/Login/style.css';

var HelloMessage = React.createClass({
    getInitialState: function() {
        return {
            username: '',
            password: ''
        };
    },

    handelClick: function() {

        var data = {
            username: this.state.username,
            password: this.state.password
        };

        SERVER.call('/checkUser', data, 'GET', function(res) {
            var res = JSON.parse(res);
                if (res.result == 'ok') {
                    var data = res.data;
                    if (data.user == 'admin') {
                        location.href = '/admin';
                    } 

                    else if (data.user == 'guest') {
                        location.href='/';
                    }
                } 

                else {
                    alert('账号或密码错误');
                }
        });
    },

    handelChangeUser: function(e) {
        this.setState({
            username: e.target.value,
        });
    },

    handelChangePass: function(e) {
        this.setState({
            password: e.target.value
        });
    },

    render: function() {
        var username = this.state.username,
            password = this.state.password;
        return <span>
               <input type="text" className="form-control username" placeholder="邮箱/用户名/手机号" name="username" onChange={this.handelChangeUser} />
               <input type="text" className="form-control password" placeholder="密码" onChange={this.handelChangePass} />
               <div className="loginOpera">
                   <div>
                       <button type="button" className="btn btn-primary submitBtn" onClick={this.handelClick} >
                           登录
                       </button>
                       </div>
                       <div className="forgetPassword">
                       忘记密码
                   </div>
               </div>
              </span>;
    }
});

ReactDOM.render(
    <HelloMessage />,
    document.getElementById('input')
);

