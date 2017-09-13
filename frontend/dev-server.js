const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const DashboardPlugin = require('webpack-dashboard/plugin');
const config = require('./config/webpack.config.development');

const app = express();
const compiler = webpack(config);

compiler.apply(new DashboardPlugin());

const host = '0.0.0.0';
//const port = process.env.PORT || 5555;
const port = 5555;

function log() {
    arguments[0] = '\nWebpack: ' + arguments[0];
    console.log.apply(console, arguments);
}

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {colors: true},
    historyApiFallback: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000,
    }
}));

app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './src/index.html'));
});

app.listen(port, host, (err) => {
    if (err) {
        log(err);
        return;
    }

    log('🚧  App is listening at http://%s:%s', host, port);
});
