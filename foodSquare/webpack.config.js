var path = require('path');

var buildPath = 'Login';

module.exports = {
    entry: './public/javascript/Login/main.js',
    output: {
        path: path.resolve(__dirname, './public/dist/'+buildPath),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
            include: [
                path.resolve(__dirname, './public/javascript/'+buildPath)
            ],
            use: 'babel-loader'
        }, {
            test: /\.css$/,
            include: [
                path.resolve(__dirname, './public/resources/'+buildPath)
            ],
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    }
};