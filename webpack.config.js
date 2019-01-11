const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/* console.log('path', path); */
/* console.log('__dirname', __dirname); */

module.exports = (env, argv) => {
	/* console.log('env, argv', env, argv); */
	
	return {
		/* отправная точка */
		entry: './src/index.js',
		/* build */
		output: {
			filename: '[name].js',
			path: __dirname + '/build'
		},
		module: {
			rules: [
				/* JS */
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader"
					}
				},
				/* html */
				{
					test: /\.html$/,
					use: [
						{
							loader: "html-loader",
							options: { minimize: true }
						}
					]
				},
				/* css */
				{
					test: /\.css$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								// you can specify a publicPath here
								// by default it use publicPath in webpackOptions.output
								publicPath: './'
							}
						},
						"css-loader"
					]
				},
				/* проброс картинок */
				{
					test: /\.(png|svg|jpg|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								/* путь */
								name: 'public/images/[name].[ext]',
							},
						},
					]
				},
				/* проброс шрифтов */
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/,
					use: ['file-loader']
				}
			]
		},
		/* node процесс */
		devServer: {
			port: 3000,
			public: 'localhost:3000',
			host: '0.0.0.0'
			// host: '192.168.1.226'
		},
		/* дополнения */
		plugins: [
			new HtmlWebPackPlugin({
				template: "./src/index.html",
				filename: "./index.html"
			}),
			new MiniCssExtractPlugin({
				filename: "[name].css",
				chunkFilename: "[id].css"
			})
		]
	}
};