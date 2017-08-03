const merge = require('webpack-merge')
const webpack = require('webpack')
const config = require('./webpack.config.base')
const path = require('path')


const GLOBALS = {
	'process.env': {
		'NODE_ENV': JSON.stringify('development')
	},
	__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'true'))
}

module.exports = merge(config, {
	debug: true,
	cache: true,
	devtool: 'cheap-module-eval-source-map',
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
			// Sass
			{
				test: /\.scss$/,
				include: [
					path.resolve(__dirname, '../src/client/assets/javascripts'),
					path.resolve(__dirname, '../src/client/assets/styles'),
					path.resolve(__dirname, '../src/client/scripts')
				],
				loaders: [
					'style',
					'css',
					'postcss',
					{ loader: 'sass', query: { outputStyle: 'expanded' } }
				]
			},
			// CSS
			{
				test: /\.css$/,
				loader: 'style!css!postcss'
			}
		]
	}
})
