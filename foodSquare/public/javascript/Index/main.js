import React from 'react';
import createReactClass from 'create-react-class';// After (15.5)
import ReactDOM from 'react-dom';
import '../../resources/Index/style.css';
import SERVER from '../lib/plugins/tools/tools.js'

var Main = createReactClass({
    render() {
        return <span>
            <div className="container-fluid">
            <div className="logo col-lg-3">
                <div className="logoBlock">
                    <div>
                    <img src="resources/Index/images/logo.png"/>
                    </div>
                    <div className="title">美食广场</div>
                </div>
            </div>
            <div className="nav col-lg-6">
                <div>食尚活动</div>
                <div className="orange">//</div>
                <div>生活盟主</div>
                <div className="orange">//</div>
                <div>达人专题主</div>
                <div className="orange">//</div>
                <div>达人专题主</div>
            </div>
            <div className="login col-lg-3">
                <div>登录</div>
                <div>注册</div>
                <div>
                    <img src="resources/Index/images/qq.png"/>
                </div>
                <div>
                    <img src="resources/Index/images/weibo.png"/>
                </div>
            </div>
            </div>
            <div className="container-fluid">
                <div className="bigImg col-lg-9">
                    <img src="resources/Index/images/bigImg.jpg" height="300px;"/>
                </div>
                <div className="talent col-lg-3">
                    <div>
                        <input type="text" className="form-control indexSearch" placeholder="日志、菜谱文章" />
                        <div className="searchIcon pull-right">
                           {/* <span className="glyphicon glyphicon-search"></span>*/}
                        </div>
                        <div>
                            <div className="talentTitle">美食广场达人</div>
                            <div className="talentInfo">
                                <div>
                                    <img src="resources/Index/images/talentImg.png" width="60px;"/>
                                </div>
                                <div className="talentMessage">
                                        <div>
                                            <span>食a色</span>
                                            <img src="resources/Index/images/talentLogo.png"/>
                                        </div>
                                        <div>
                                            来自: 成都
                                        </div>
                                        <div>
                                            家常菜达人，慵懒范小主。
                                        </div>
                                </div>
                            </div>
                            <div className="topicBlock">
                                <span className="talentTopic">TA的人气话题</span>
                                <ul>
                                    <li>我这样保存奶油奶酪</li>
                                    <li>自制熟糯米粉</li>
                                    <li>【厨具小窍门】+关于空气炸锅的使...</li>
                                    <li>【首发】【厨具秘籍】+一桩分尸案...</li>
                                    <li>自制熟面粉</li>
                                    <li>双色馒头第二磕：红曲双色馒头</li>
                                    <li>【国民家常菜】黄金南瓜丝饼</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                {/*菜谱文章*/}
                <div className="col-lg-6 cookBook">
                    <div className="cbLabel">菜谱文章</div>
                    <hr/>
                    <div className="cbBlock">
                        <div className="cbMessage">
                            <div>
                                <img src="resources/Index/images/cookBook.jpg" width="200px" height="100px"/>
                            </div>
                            <div className="cbInfo">
                                <div className="cbTitle">灰枣花卷</div>
                                <div className="font11 publishTime">发表于2016-03-18</div>
                                <div className="cbText font11">“春暖花花，也是孩子们生长发育的最佳时机，
                                    增加营养义不容辞。 从主食开始牛奶灰枣花卷来一份哈 牛奶补充钙质，红枣自然是帮助孩子们良好睡眠，
                                </div>
                            </div>
                        </div>
                        <div className="supplyText font11">
                            睡得好，长得才快哈。 简单易做，家常美食哈。”春暖花花，也是孩子们生长发育的最佳时机，增加营养义不容辞。
                            从主食开始牛奶灰枣花卷来一份哈 牛奶补充钙质。
                        </div>
                        <div className="author font12">--maozipy</div>
                    </div>
                    <div className="cbBlock">
                        <div className="cbMessage">
                            <div>
                                <img src="resources/Index/images/cookBook.jpg" width="200px" height="100px"/>
                            </div>
                            <div className="cbInfo">
                                <div className="cbTitle">灰枣花卷</div>
                                <div className="font11 publishTime">发表于2016-03-18</div>
                                <div className="cbText font11">“春暖花花，也是孩子们生长发育的最佳时机，
                                    增加营养义不容辞。 从主食开始牛奶灰枣花卷来一份哈 牛奶补充钙质，红枣自然是帮助孩子们良好睡眠，
                                </div>
                            </div>
                        </div>
                        <div className="supplyText font11">
                            睡得好，长得才快哈。 简单易做，家常美食哈。”春暖花花，也是孩子们生长发育的最佳时机，增加营养义不容辞。
                            从主食开始牛奶灰枣花卷来一份哈 牛奶补充钙质。
                        </div>
                        <div className="author font12">--maozipy</div>
                    </div>
                    <div className="cbBlock">
                        <div className="cbMessage">
                            <div>
                                <img src="resources/Index/images/cookBook.jpg" width="200px" height="100px"/>
                            </div>
                            <div className="cbInfo">
                                <div className="cbTitle">灰枣花卷</div>
                                <div className="font11 publishTime">发表于2016-03-18</div>
                                <div className="cbText font11">“春暖花花，也是孩子们生长发育的最佳时机，
                                    增加营养义不容辞。 从主食开始牛奶灰枣花卷来一份哈 牛奶补充钙质，红枣自然是帮助孩子们良好睡眠，
                                </div>
                            </div>
                        </div>
                        <div className="supplyText font11">
                            睡得好，长得才快哈。 简单易做，家常美食哈。”春暖花花，也是孩子们生长发育的最佳时机，增加营养义不容辞。
                            从主食开始牛奶灰枣花卷来一份哈 牛奶补充钙质。
                        </div>
                        <div className="author font12">--maozipy</div>
                    </div>
                    <div className="cbBlock">
                        <div className="cbMessage">
                            <div>
                                <img src="resources/Index/images/cookBook.jpg" width="200px" height="100px"/>
                            </div>
                            <div className="cbInfo">
                                <div className="cbTitle">灰枣花卷</div>
                                <div className="font11 publishTime">发表于2016-03-18</div>
                                <div className="cbText font11">“春暖花花，也是孩子们生长发育的最佳时机，
                                    增加营养义不容辞。 从主食开始牛奶灰枣花卷来一份哈 牛奶补充钙质，红枣自然是帮助孩子们良好睡眠，
                                </div>
                            </div>
                        </div>
                        <div className="supplyText font11">
                            睡得好，长得才快哈。 简单易做，家常美食哈。”春暖花花，也是孩子们生长发育的最佳时机，增加营养义不容辞。
                            从主食开始牛奶灰枣花卷来一份哈 牛奶补充钙质。
                        </div>
                        <div className="author font12">--maozipy</div>
                    </div>
                </div>
                {/*精选日志*/}
                <div className="col-lg-3 log">
                    <div>精选日志</div>
                    <hr/>
                    <div className="logBlock">
                        <div className="logMessage">
                            <div>
                                <img src="resources/Index/images/logImg.jpg" width="90px" height="70px"/>
                            </div>
                            <div className="logInfo">
                                <div className="logTitle">日式拌豆腐</div>
                                <div className="logText font11">
                                    日式拌豆腐是一道开胃、爽口的家常菜，

                                    去日本旅游时，

                                    吃过的一道非常清淡的小菜！
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="logBlock">
                        <div className="logMessage">
                            <div>
                                <img src="resources/Index/images/logImg.jpg" width="90px" height="70px"/>
                            </div>
                            <div className="logInfo">
                                <div className="logTitle">日式拌豆腐</div>
                                <div className="logText font11">
                                    日式拌豆腐是一道开胃、爽口的家常菜，

                                    去日本旅游时，

                                    吃过的一道非常清淡的小菜！
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="logBlock">
                        <div className="logMessage">
                            <div>
                                <img src="resources/Index/images/logImg.jpg" width="90px" height="70px"/>
                            </div>
                            <div className="logInfo">
                                <div className="logTitle">日式拌豆腐</div>
                                <div className="logText font11">
                                    日式拌豆腐是一道开胃、爽口的家常菜，

                                    去日本旅游时，

                                    吃过的一道非常清淡的小菜！
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="logBlock">
                        <div className="logMessage">
                            <div>
                                <img src="resources/Index/images/logImg.jpg" width="90px" height="70px"/>
                            </div>
                            <div className="logInfo">
                                <div className="logTitle">日式拌豆腐</div>
                                <div className="logText font11">
                                    日式拌豆腐是一道开胃、爽口的家常菜，

                                    去日本旅游时，

                                    吃过的一道非常清淡的小菜！
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="logBlock">
                        <div className="logMessage">
                            <div>
                                <img src="resources/Index/images/logImg.jpg" width="90px" height="70px"/>
                            </div>
                            <div className="logInfo">
                                <div className="logTitle">日式拌豆腐</div>
                                <div className="logText font11">
                                    日式拌豆腐是一道开胃、爽口的家常菜，

                                    去日本旅游时，

                                    吃过的一道非常清淡的小菜！
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="logBlock">
                        <div className="logMessage">
                            <div>
                                <img src="resources/Index/images/logImg.jpg" width="90px" height="70px"/>
                            </div>
                            <div className="logInfo">
                                <div className="logTitle">日式拌豆腐</div>
                                <div className="logText font11">
                                    日式拌豆腐是一道开胃、爽口的家常菜，

                                    去日本旅游时，

                                    吃过的一道非常清淡的小菜！
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*人气美食家*/}
                <div className="col-lg-3 epicure">
                    <div>人气美食家</div>
                    <hr/>
                    <div className="epBlock">
                        <div className="epMessage">
                            <div>
                                <img src="resources/Index/images/myLogo.png" width="70px" height="65px"/>
                            </div>
                            <div className="epInfo">
                                <div className="orange">PY</div>
                                <div className="font11">只想安静的做一枚简单的吃货</div>
                                <div className="addAttention font12">关注</div>
                            </div>
                        </div>
                    </div>
                    <div className="epBlock">
                        <div className="epMessage">
                            <div>
                                <img src="resources/Index/images/myLogo.png" width="70px" height="65px"/>
                            </div>
                            <div className="epInfo">
                                <div className="orange">PY</div>
                                <div className="font11">只想安静的做一枚简单的吃货</div>
                                <div className="addAttention font12">关注</div>
                            </div>
                        </div>
                    </div>
                    <div className="epBlock">
                        <div className="epMessage">
                            <div>
                                <img src="resources/Index/images/myLogo.png" width="70px" height="65px"/>
                            </div>
                            <div className="epInfo">
                                <div className="orange">PY</div>
                                <div className="font11">只想安静的做一枚简单的吃货</div>
                                <div className="addAttention font12">关注</div>
                            </div>
                        </div>
                    </div>
                    <div className="epBlock">
                        <div className="epMessage">
                            <div>
                                <img src="resources/Index/images/myLogo.png" width="70px" height="65px"/>
                            </div>
                            <div className="epInfo">
                                <div className="orange">PY</div>
                                <div className="font11">只想安静的做一枚简单的吃货</div>
                                <div className="addAttention font12">关注</div>
                            </div>
                        </div>
                    </div>
                    <div className="epBlock">
                        <div className="epMessage">
                            <div>
                                <img src="resources/Index/images/myLogo.png" width="70px" height="65px"/>
                            </div>
                            <div className="epInfo">
                                <div className="orange">PY</div>
                                <div className="font11">只想安静的做一枚简单的吃货</div>
                                <div className="addAttention font12">关注</div>
                            </div>
                        </div>
                    </div>
                    <div className="epBlock">
                        <div className="epMessage">
                            <div>
                                <img src="resources/Index/images/myLogo.png" width="70px" height="65px"/>
                            </div>
                            <div className="epInfo">
                                <div className="orange">PY</div>
                                <div className="font11">只想安静的做一枚简单的吃货</div>
                                <div className="addAttention font12">关注</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </span>
    }
});

ReactDOM.render(
    <Main />,
    document.getElementsByClassName('main')[0]
);