const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const webpackConfig = require('./webpack.dev.config');
const compiler = webpack(webpackConfig);

var devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: '/',
    quiet: true,
    noInfo: true,
    stats: {
        colors: true,
        children: false,
        modules: true,
        chunks: false,
        chunkModules: false
    }
});

app.use(devMiddleware);

var hotMiddleWare = webpackHotMiddleware(compiler, {
    log: () => {},
    reload: true,
    noInfo: true
});

app.use(hotMiddleWare);

app.listen(3000, function() {
    console.log('Example app listening on port 3000!\n');
});
