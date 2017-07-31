const webpack = require('webpack');

const Merge = require('webpack-merge');

const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
    plugins: [
        // webpack -p (or equivalently webpack --optimize-minimize --define process.env.NODE_ENV="'production'")
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ],
})