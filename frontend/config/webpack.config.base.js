const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, '../build/client'),
        publicPath: '/'
    },
    resolve: {
        modules: [
            path.join(__dirname, '../src/'),
            path.join(__dirname, '../src/javascripts'),
            path.join(__dirname, '../node_modules')
        ],
        alias: {
            models: path.join(__dirname, '../src/javascripts/models')
        },
        extensions: ['.js', '.jsx', '.json', '.scss']
    },
    plugins: [
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'js/vendor.bundle.js',
            minChunks: Infinity
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, '../src/javascripts'),
                loader: 'babel'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url',
                query: {
                    limit: 8192,
                    name: 'images/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url',
                query: {
                    limit: 8192,
                    name: 'fonts/[name].[ext]?[hash]'
                }
            }
        ]
    },
    postcss: function () {
        return [
            autoprefixer({
                browsers: ['last 2 versions']
            })
        ];
    }
};
