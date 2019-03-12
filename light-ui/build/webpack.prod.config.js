const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
// const UglifyjsPlugin = require('uglifyjs-webpack-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseWebpackConfig = require('./webpack.base.config');

var webpackConfig = merge(baseWebpackConfig, {
    devtool: '#source-map',
    output: {
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': 'production'
        }),
        new MiniCssExtractPlugin({
            filename: path.resolve(__dirname, '../dist/css/[name].css'),
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        }]
    }
});

module.exports = webpackConfig;