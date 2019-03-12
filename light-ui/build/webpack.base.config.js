const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    context: path.resolve(__dirname, '../'),
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../')
        }),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    // module: {
    //     rules: [{
    //             test: /\.css$/,
    //             use: [
    //                 'style-loader',
    //                 'css-loader'
    //             ]
    //         },
    //         // {
    //         //     test: /\.(png|svg|jpe?g|gif)$/,
    //         //     use: 'url-loader',
    //         //     options: {
    //         //         limit: 10000
    //         //     }
    //         // }
    //         // {
    //         //     test: /\.(woff2?|eot|ttf|otf)$/,
    //         //     use: 'url-loader',
    //         //     options: {
    //         //         limit: 10000
    //         //     }
    //         // }
    //     ]
    // }
};

module.exports = config;