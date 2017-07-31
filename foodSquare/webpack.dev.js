const path = require('path');

const webpack = require('webpack');

const Merge = require('webpack-merge');

const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
    // it can become easy to track down errors and warnings to their original location
    devtool: 'inline-source-map'
});