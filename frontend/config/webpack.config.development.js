const merge = require('webpack-merge');
const webpack = require('webpack');
const config = require('./webpack.config.base');
const path = require('path');

const GLOBALS = {
    'process.env': {
        'NODE_ENV': JSON.stringify('development')
    },
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'true'))
};

module.exports = merge(config, {
    debug: true,
    cache: true,
    devtool: 'inline-eval-cheap-source-map',
    entry: {
        application: [
            'webpack-hot-middleware/client',
            'react-hot-loader/patch',
            'development'
        ],
        vendor: ['react', 'react-dom', 'react-redux', 'react-router', 'react-router-redux', 'redux']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin(GLOBALS)
    ],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                include: [
                    path.resolve(__dirname, '../src/javascripts'),
                    path.resolve(__dirname, '../src/styles'),
                ],
                loaders: [
                    'style',
                    'css',
                    'postcss',
                    {loader: 'sass', query: {outputStyle: 'expanded'}}
                ]
            },
            {
                test: /\.css$/,
                loader: 'style!css!postcss'
            }
        ]
    }
});
