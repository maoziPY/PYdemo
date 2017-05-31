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
                    case 'blog':
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
                                <TbodyClass trData={this.state.trData} callbackParentgetData={this.getData}/>
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
var TbodyClass = React.createClass({

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
                tableName: 'user',
                id: id
            }

            SERVER.call('/delData', data, 'GET', function(res) {
                var res = JSON.parse(res);
                if (res.result == 'ok') {
                    console.log(res);
                    this.props.callbackParentgetData();
                }
            }.bind(this));
        }
    },

    render() {
        var row = [];
        $(this.props.trData.data).each(function(i, k) {
            var td = [];
            for(var x in k) {
                td.push(<td>{k[x]}</td>);
            }
            row.push(<tr className="active">
                            {td}
                            <td>
                                <span style={{cursor: 'pointer'}} onClick={this.edit.bind(this, k.id)}>编辑 </span>
                                <span style={{cursor: 'pointer'}} onClick={this.delete.bind(this, k.id)}>删除 </span> 
                            </td>
                     </tr>);
        }.bind(this));

        var rows = [];
        $(this.props.trData.rows).each(function(i, k) {
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