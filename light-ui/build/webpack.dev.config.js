const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.config');

var webpackConfig = merge(baseWebpackConfig, {
    //实现刷新浏览器webpack-hot-middleware/client?noInfo=true&reload=true 是必填的
    entry: ['webpack-hot-middleware/client?noInfo=true&reload=true', path.resolve(__dirname, '../src/index.js')],
    devtool: '#cheap-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});

module.exports = webpackConfig;