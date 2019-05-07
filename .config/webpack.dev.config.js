const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.base.config.js');

module.exports = function (env) {
	return webpackMerge(commonConfig(), {		
		//watch: true,
		mode:'development',
		devServer: {
			contentBase: [path.resolve(__dirname, '../sample'),path.resolve(__dirname, '..')],  // New
			compress: true,
			watchContentBase: true,
			port: 9000,
			watchOptions: {
				poll: 1000,
				ignored: path.resolve(__dirname, '../node_modules')
			}
		},
	});
};