var HelloMessage = React.createClass({
    render: function() {
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
                                    <li><a href="#">Item without subitems</a></li>
                                    <li><a href="#">Item without subitems</a></li>
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
                                    <tbody>
                                    <tr className="active">
                                         <th scope="row">2</th>
                                         <td>Column content</td>
                                         <td>Column content</td>
                                         <td>Column content</td>
                                     </tr>
                                     <tr className="active">
                                         <th scope="row">3</th>
                                         <td>Column content</td>
                                         <td>Column content</td>
                                         <td>Column content</td>
                                     </tr>
                                     <tr className="active">
                                         <th scope="row">4</th>
                                         <td>Column content</td>
                                         <td>Column content</td>
                                         <td>Column content</td>
                                     </tr>
                                     <tr className="active">
                                         <th scope="row">5</th>
                                         <td>Column content</td>
                                         <td>Column content</td>
                                         <td>Column content</td>
                                     </tr>
                                     <tr className="active">
                                         <th scope="row">6</th>
                                         <td>Column content</td>
                                         <td>Column content</td>
                                         <td>Column content</td>
                                     </tr>
                                     <tr className="active">
                                         <th scope="row">7</th>
                                         <td>Column content</td>
                                         <td>Column content</td>
                                         <td>Column content</td>
                                     </tr>
                                     <tr className="active">
                                         <th scope="row">8</th>
                                         <td>Column content</td>
                                         <td>Column content</td>
                                         <td>Column content</td>
                                     </tr>
                                     <tr className="active">
                                         <th scope="row">9</th>
                                         <td>Column content</td>
                                         <td>Column content</td>
                                         <td>Column content</td>
                                     </tr>
                                     <tr className="active">
                                         <th scope="row">10</th>
                                         <td>Column content</td>
                                         <td>Column content</td>
                                         <td>Column content</td>
                                     </tr>
                                    </tbody>
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

ReactDOM.render(
    <HelloMessage />,
    document.getElementById('input')
);