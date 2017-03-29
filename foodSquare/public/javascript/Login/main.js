var HelloMessage = React.createClass({
    getInitialState: function() {
        return {
            username: '',
            password: ''
        };
    },

    handelClick: function(e) {
        console.log(this.state.username);
        console.log(this.state.password);
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
        return <div>
               <input type="text" className="form-control username" placeholder="邮箱/用户名/手机号" onChange={this.handelChangeUser}    />
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
              </div>;
    }
});

ReactDOM.render(
    <HelloMessage />,
    document.getElementById('input')
);


function Login() {
    var module = this;
    module.container = $("." + arguments[0]); // 模块容器
    module.name = /function\s+(\w+)/.exec(arguments.callee)[1]; // 模板名称
}

Login.prototype.load = function() {
var module = this;
PY.getTemplate(module.name, function(tm) {
    // 渲染主模板
    var $master = $(tm).find("[tmkey=master]");
    module.container.empty();
    module.container.append($master.html());

    // 绑定相关事件
    module.setEvent();
});
};

/**
 * setEvent 绑定相关事件
 * */
Login.prototype.setEvent = function() {
var module = this;

module.container.find(".submitBtn").click(function() {
    var username = module.container.find(".username").val();
    var password = module.container.find(".password").val();

    SERVER.call(
        "http://localhost:3000/queryByUsername",
        {
            username: username,
            password: password
        }, function(res) {
            // 成功
            if (res.length > 0) {
                // 管理员
                if (res[0].username == "admin") {
                    window.open("/view/AdminIndex/index.html", "_self");
                } else {
                    window.open("/view/index/index.html", "_self");
                }
            }
            // 失败
            else {
                alert("请输入正确的用户名或者密码！");
            }
        }
    );
});

module.container.find(".forgetPassword").click(function() {
    alert("不给蠢的人重新设置密码，不谢！");
});
};

