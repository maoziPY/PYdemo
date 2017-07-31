const path = require('path');

const buildPath = 'Login';

module.exports = {
    entry: './public/javascript/'+buildPath+'/main.js',
    output: {
        path: path.resolve(__dirname, './public/dist/'+buildPath),
        filename: 'bundle.js',
    },
    // devtool: 'eval-source-map',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
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
}