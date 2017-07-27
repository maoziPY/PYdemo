/**
 * Created by PY on 2016/6/21 0021.
 */
var SERVER = {};

/**
 *  @param url 请求路径
 *  @param par 请求参数
 *  @param success 成功的回调方法
 * */
SERVER.call = function(url, par, type, success) {
    $.ajax({
        type: type,
        url: url,
        data: par,
        success: function(res) {
            if(success) {
                success(res);
            }
        }
    });
};

export default SERVER;