const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    module: {
        rules: [
            {
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
};

module.exports = config;