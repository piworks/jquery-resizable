const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('webpack-copy-after-build-plugin');
webpack = require('webpack');
module.exports = function () {
	return {
		mode: 'none',
		entry: {
			resizable: './src/jquery-resizable.js',
			resizableTableColumns: './src/jquery-resizableTableColumns.js'
		},
		output: {
			path: path.resolve(__dirname, '../dist'),
			filename: 'jquery-[name].js'
		},

		plugins: [
			new CleanWebpackPlugin()
		]
	}
};
