var path = require('path');

var buildPath = 'Login';

const webpack = require('webpack');

module.exports = {
    entry: './public/javascript/Login/main.js',
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
    },
    plugins: [
        // webpack -p (or equivalently webpack --optimize-minimize --define process.env.NODE_ENV="'production'")
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
};