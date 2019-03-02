const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

webpack(webpackConfig, (err, stats) => {
    process.stdout.write(stats.toString({
        colors: true,
        children: false,
        modules: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n');
});