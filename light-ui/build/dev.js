const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const webpackConfig = require('./webpack.dev.config');
const compiler = webpack(webpackConfig);

var devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: '/'
});

app.use(devMiddleware);

var hotMiddleWare = webpackHotMiddleware(compiler, {
    log: false
});

app.use(hotMiddleWare);

app.listen(3000, function() {
    console.log('Example app listening on port 3000!\n');
});
