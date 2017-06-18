
let HTMLWebpackPlugin = require('html-webpack-plugin');


let HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/app/index.html',
	inject: 'body'
});

module.exports = {
	context: __dirname + '/app',
	entry: {
		javascript: './js/main.js'
	},
	output: {
		filename: 'app.js',
		path: __dirname + '/dist'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot-loader', 'babel-loader']
			}
		]
	},
	plugins: [HTMLWebpackPluginConfig]
};
