const express = require('express');
const open = require('open');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('./config/webpack/webpack.dev.js');
const compiler = webpack(config);

const PORT = process.env.PORT ?? 3000;

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.use(webpackHotMiddleware(compiler));

app.listen(PORT, function () {
  console.log(`Serve is started at port ${PORT}...\n`);
  open(`http://localhost:${PORT}/`);
});