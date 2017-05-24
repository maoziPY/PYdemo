var HelloMessage = React.createClass({
    getInitialState() {
        return {
            trData: '123'
        };
    },

    getData() {
        var data = {
            database: 'user'
        };

        SERVER.call('/getData', data, 'GET', function(res) {
            var res = JSON.parse(res);
            if (res.result == 'ok') {
                this.setState(function(state) {
                    return {trData: res};
                });
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
                                <ul>
                                    <li><a href="javascript:void(0)" onClick={this.getData}>用户信息</a></li>
                                    <li><a href="#">Item without subitems</a></li>
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
                                    <li><a href="#">Item 2</a>
                                        <ul>
                                            <li><a href="#">Subitem 1</a></li>
                                            <li><a href="#">Subitem 2</a></li>
                                            <li><a href="#">Subitem 3</a></li>
                                            <li><a href="#">Subitem 4</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Item 3</a>
                                        <ul>
                                            <li><a href="#">Subitem 1</a></li>
                                            <li><a href="#">Subitem 2</a></li>
                                            <li><a href="#">Subitem 3</a></li>
                                            <li><a href="#">Subitem 4</a></li>
                                            <li><a href="#">Subitem 5</a></li>
                                            <li><a href="#">Subitem 6</a></li>
                                        </ul>
                                    </li>
                                </ul>
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
                                    <TbodyClass name={this.state.trData}/>
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

var TbodyClass = React.createClass({
    render() {
        var row = [];
        console.log(this.props.name.data);
        $(this.props.name.data).each(function(i, k) {
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

ReactDOM.render(
    <HelloMessage />,
    document.getElementById('input')
);