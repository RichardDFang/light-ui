const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');

var webpackConfig = merge(baseWebpackConfig, {
    //实现刷新浏览器webpack-hot-middleware/client?noInfo=true&reload=true 是必填的
    entry: ['webpack-hot-middleware/client?noInfo=true&reload=true', path.resolve(__dirname, '../src/index.js')],
    devtool: '#cheap-eval-source-map',
    mode: 'development',
    output: {
        filename: '[name].[hash].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
        })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // {
            //     test: /\.(png|svg|jpe?g|gif)$/,
            //     use: 'url-loader',
            //     options: {
            //         limit: 10000
            //     }
            // }
            // {
            //     test: /\.(woff2?|eot|ttf|otf)$/,
            //     use: 'url-loader',
            //     options: {
            //         limit: 10000
            //     }
            // }
        ]
    }
});

module.exports = webpackConfig;