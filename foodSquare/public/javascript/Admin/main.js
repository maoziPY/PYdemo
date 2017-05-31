var HelloMessage = React.createClass({
    getInitialState() {
        return {
            tableData: this.props.tableData,
            menu: this.props.menu,
            tableName: this.props.tableName
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
                    case 'blog':
                    this.setState({tableData: res, tableName: tableName});

                    break;
                    case 'adMenu':
                    this.setState({menu: res});
                }
            }
        }.bind(this));
    },

    render() {
        var red = 'red';
        return <span>
                    <div className="adHeard container-fluid" style={{color: red}}>
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
                                {/*左侧列表区*/}
                                <MenuList menu={this.state.menu} callbackParentgetData={this.getData}/>
                            </div>
                        </div>
                        </div>
                        <div className="adMenuDetail col-lg-9">
                            <div data-example-id="contextual-table" className="listBlock">
                                {/*右侧table渲染区*/}
                                <TableClass tableData={this.state.tableData} callbackParentgetData={this.getData} tableName={this.state.tableName}/>
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
                    {/*编辑弹窗*/}
                    <div>
                        <form className="form-horizontal">
                          <div className="form-group">
                            <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
                            <div className="col-sm-10">
                              <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                            </div>
                          </div>
                          <div className="form-group">
                            <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
                            <div className="col-sm-10">
                              <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                              <button type="submit" className="btn btn-default">保存</button>
                              <button type="submit" className="btn btn-default">取消</button>
                            </div>
                          </div>
                        </form>
                        <div className="mask"></div>
                    </div>
                </span>;
    }
});

//左侧菜单
var MenuList = React.createClass({

    getData(tableName) {
        this.props.callbackParentgetData(tableName);
    },

    render() {
        var row = [];
        $(this.props.menu.data).each(function(i, k) {
            row.push(
                <li style={{color: 'red'}}><a href="javascript:void(0)" onClick={this.getData.bind(this, k.tablename)}>{k.name}</a></li>
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


//右侧列表
var TableClass = React.createClass({

    /**
     * [edit 编辑]
     * @param  {[number]} id [id]
     */
    edit(id) {
    },

    /**
     * [delete 删除]
     * @param  {[number]} id [id]
     * @param  {[number]} tableName [表名称]
     */
    delete(id, tableName) {

        //删除确认提示
        if (confirm('删除是不可恢复的，你确认要删除吗？')) {
            var data = {
                tableName: tableName,
                id: id
            }

            SERVER.call('/delData', data, 'GET', function(res) {
                var res = JSON.parse(res);
                if (res.result == 'ok') {
                    this.props.callbackParentgetData(tableName);
                }
            }.bind(this));
        }
    },

    render() {
        var row = [];
        $(this.props.tableData.data).each(function(i, k) {
            var td = [];
            for(var x in k) {
                td.push(<td>{k[x]}</td>);
            }
            row.push(<tr className="active">
                            {td}
                            <td>
                                <span style={{cursor: 'pointer'}} onClick={this.edit.bind(this, k.id, this.props.tableName)}>编辑 </span>
                                <span style={{cursor: 'pointer'}} onClick={this.delete.bind(this, k.id, this.props.tableName)}>删除 </span> 
                            </td>
                     </tr>);
        }.bind(this));

        var rows = [];
        $(this.props.tableData.rows).each(function(i, k) {
            rows.push(<th>{k.Comment}</th>);
        }.bind(this));

        rows.push(<th>操作</th>);

        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    {rows}
                </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
            </table>
        );
    }
});

var postData = {
    tableData: {},
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
                postData.tableData = res;

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
            <HelloMessage tableData={postData.tableData} menu={postData.menu} tableName="user" />,
            document.getElementById('input')
        );
    });
});