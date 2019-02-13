var path = require('path');

const config = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'webpack.bundle.js'
    }
};

module.exports = config;