/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const path = require('path');
const open = require('open');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./config/webpack/webpack.dev.js');

const app = express();
const compiler = webpack(config);

const PORT = process.env.PORT ?? 3000;

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }),
);

app.use(webpackHotMiddleware(compiler));

app.use('*', (req, res, next) => {
  const filename = path.resolve(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
});

app.listen(PORT, () => {
  console.info(`Serve is started at port ${PORT}...\n`);
  open(`http://localhost:${PORT}/`);
});
