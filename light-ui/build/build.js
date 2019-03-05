const webpack = require('webpack');
const webpackConfig = require('./webpack.prod.config');

webpack(webpackConfig, (err, stats) => {
    process.stdout.write(stats.toString({
        colors: true,
        children: false,
        modules: true,
        chunks: false,
        chunkModules: false
    }) + '\n\n');
});