const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.base.config.js');

module.exports = function (env) {
	return webpackMerge(commonConfig(), {
		mode: 'production'
	});
};