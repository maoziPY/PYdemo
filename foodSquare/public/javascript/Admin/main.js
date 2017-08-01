import React from 'react';
import createReactClass from 'create-react-class';// After (15.5)
import ReactDOM from 'react-dom';
import '../../resources/Admin/style.css';
import SERVER from '../lib/plugins/tools/tools.js'

var HelloMessage = createReactClass({
    getInitialState() {
        return {
            //右侧列表数据
            tableData: this.props.tableData,
            //左侧菜单列表
            menu: this.props.menu,
            //表格名称
            tableName: this.props.tableName,
            //显示or隐藏编辑窗口
            dsiologDisplay: 'none',
            //编辑的任务下标
            editIndex: 0,
            //编辑的任务数据
            selectData: {}
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

    /**
     * [stateControl 修改state值]
     * @param  {[string]} key [键]
     * @param  {[string]} val [值]
     */
    stateControl(key, val) {
        switch(key) {
            case 'dsiologDisplay':
            this.setState({dsiologDisplay: val});
            break;
        }
    },

    edit(index, selectData) {
        this.setState({editIndex: index, dsiologDisplay: 'block', selectData: selectData});
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
                                {<TableClass tableData={this.state.tableData} callbackParentgetData={this.getData} tableName={this.state.tableName} callbackParentSetstatu={this.stateControl} edit={this.edit}/>}
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
                    {<DialogClass dsiologDisplay={this.state.dsiologDisplay} getData={this.getData} callbackParentSetstatu={this.stateControl} tableData={this.state.tableData} editIndex={this.state.editIndex} selectData={this.state.selectData} tableName={this.state.tableName}/>}
                </span>;
    }
});

//左侧菜单
var MenuList = createReactClass({

    getData(tableName) {
        this.props.callbackParentgetData(tableName);
    },

    render() {
        var row = this.props.menu.data.map((k, i) =>
           <li key={i} style={{color: 'red'}}><a href="javascript:void(0)" onClick={this.getData.bind(this, k.tablename)}>{k.name}</a></li>
        );

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
var TableClass = createReactClass({

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
                td.push(<td key={x}>{k[x]}</td>);
            }
            row.push(<tr key={i} className="active">
                            {td}
                            <td>
                                <span style={{cursor: 'pointer'}} onClick={this.props.edit.bind(null, i, k)}>编辑 </span>
                                <span style={{cursor: 'pointer'}} onClick={this.delete.bind(null, k.id, this.props.tableName)}>删除 </span> 
                            </td>
                     </tr>);
        }.bind(this));

        var rows = this.props.tableData.rows.map((k, i) =>
            <th key={i}>{k.Comment}</th>
        );

        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    {rows}
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                    {row}
                </tbody>
            </table>
        );
    }
});


//编辑弹窗
var DialogClass = createReactClass({

    getInitialState() {
        return {
            newData: {}
        }
    },

    handleOnchange(e) {
        this.state.newData[e.target.id] = e.target.value;
    },

    //保存
    save() {

        //没有修改数据
        if (JSON.stringify(this.state.newData) == '{}') {
            //关闭弹窗
            this.props.callbackParentSetstatu('dsiologDisplay', 'none');
            return;
        }

        var data = {
            tableName: this.props.tableName,
            selectData: this.props.selectData,
            newData: this.state.newData
        }

        SERVER.call('/editData', data, 'GET', function(res) {
            var res = JSON.parse(res);
            if (res.result == 'ok') {
                this.props.callbackParentSetstatu('dsiologDisplay', 'none');
                this.props.getData(this.props.tableName);
            }
        }.bind(this));
    },

    render() {
        var rows = [];
        var index = this.props.editIndex ? this.props.editIndex : 0;
        $(this.props.tableData.rows).each(function(i, k) {
            if (k.Field != 'id' && k.Field != 'create_time') {
                rows.push(
                    <div key={i} className="form-group">
                      <label data-for="inputEmail3" className="col-sm-2 control-label">{k.Comment}</label>
                      <div className="col-sm-10">
                        <input className="form-control" id={k.Field} value={this.state.newData[k.Field]} placeholder={this.props.tableData.data[index][k.Field]} onChange={this.handleOnchange}/>
                      </div>
                    </div>
                );
            }
        }.bind(this));

        return (
            <div style={{display: this.props.dsiologDisplay}}>
                <div className="form-horizontal">
                   <div className="form-group">
                        <button type="button" className="close" onClick={this.props.callbackParentSetstatu.bind(null,'dsiologDisplay', 'none')}><span className="glyphicon glyphicon-remove"></span></button>
                  </div>
                  {rows}
                  <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                      <button type="submit" className="btn btn-default" onClick={this.save}>保存</button>
                      <button type="submit" className="btn btn-default" onClick={this.props.callbackParentSetstatu.bind(null,'dsiologDisplay', 'none')}>取消</button>
                    </div>
                  </div>
                </div>
                <div className="mask"></div>
            </div>
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