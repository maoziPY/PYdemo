var HelloMessage = React.createClass({
    getInitialState() {
        return {
            trData: this.props.trData,
            menu: this.props.menu
        };
    },

    getData(tableName) {
        tableName = typeof tableName == 'string' ? tableName : 'user';
        var data = {
            tableName: tableName
        };

        SERVER.call('/getData', data, 'GET', function(res) {
            var res = JSON.parse(res);
            if (res.result == 'ok') {
                switch(tableName) {
                    case 'user':
                    this.setState({trData: res});

                    break;
                    case 'adMenu':
                    this.setState({menu: res});
                }
            }
        }.bind(this));
    },

    render() {
        return <span>
                    <div className="adHeard container-fluid">
                        <div>
                            <img src="resources/Admin/images/2.gif" width="100%" height="100px"/>
                        </div>
                        <div className="adminInfo">
                            <div>
                                欢迎您： admin
                            </div>
                            <div><a href="/view/index/index.html">首页</a></div>
                            <div><a href="/view/login/detail.html">退出</a></div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="adMenu col-lg-3">
                            <div id="content">
                            <div className="menu">
                                <MenuList menu={this.state.menu} callbackParentgetData={this.getData}/>
                            </div>
                        </div>
                        </div>
                        <div className="adMenuDetail col-lg-9">
                            <div data-example-id="contextual-table" className="listBlock">
                                <table className="table table-hover">
                                    <thead>
                                    <tr>
                                        <th>序号</th>
                                        <th>用户名</th>
                                        <th>密码</th>
                                        <th>操作</th>
                                    </tr>
                                    </thead>
                                    <TbodyClass trData={this.state.trData}/>
                                </table>
                            </div>
                            <div className="page">
                                <nav>
                                    <ul className="pagination">
                                        <li>
                                            <a href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                            </a>
                                        </li>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li>
                                            <a href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </span>;
    }
});

var MenuList = React.createClass({

    getData(tableName) {
        this.props.callbackParentgetData(tableName);
    },

    render() {
        var row = [];
        $(this.props.menu.data).each(function(i, k) {
            row.push(
                <li><a href="javascript:void(0)" onClick={this.getData.bind(this, k.tablename)}>{k.name}</a></li>
            );
        }.bind(this));

        return (
            <ul>
                {row}
                <li><a href="#" >Item without subitems</a></li>
                <li><a className="active" href="#">Item1</a>
                    <ul>
                        <li><a href="#">Subitem 1</a></li>
                        <li><a href="#">Subitem 2</a>
                            <ul>
                                <li><a href="#">Subitem 1</a></li>
                                <li><a href="#">Subitem 2</a></li>
                                <li><a href="#">Subitem 3</a></li>
                                <li><a href="#">Subitem 4</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Subitem 3</a></li>
                        <li><a href="#">Subitem 4</a>
                            <ul>
                                <li><a href="#">Subitem 1</a></li>
                                <li><a href="#">Subitem 2</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Subitem 5</a></li>
                    </ul>
                </li>
            </ul>
        )
    }
});

var TbodyClass = React.createClass({
    render() {
        var row = [];
        $(this.props.trData.data).each(function(i, k) {
            row.push(<tr className="active">
                            <th scope="row">{k.id}</th>
                            <td>{k.username}</td>
                            <td>{k.password}</td>
                            <td>管理 删除</td>
                     </tr>);
        });
        return (
            <tbody>
                {row}
            </tbody>
        );
    }
});

var postData = {
    trData: {},
    menu: {}
};

function getData(tableName, callback) {
    var data = {
        tableName:  typeof tableName == 'string' ? tableName : 'user'
    };

    SERVER.call('/getData', data, 'GET', function(res) {
        var res = JSON.parse(res);
        if (res.result == 'ok') {
            switch(tableName) {
                case 'user':
                postData.trData = res;

                break;
                case 'adMenu':
                postData.menu = res;
            }

            if (callback) {
                callback();
            }
        }
    });
};

getData('user', function() {
    getData('adMenu', function() {
        ReactDOM.render(
            <HelloMessage trData={postData.trData} menu={postData.menu}  />,
            document.getElementById('input')
        );
    });
});