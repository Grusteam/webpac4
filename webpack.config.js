const
	__MY_SETUP = {
		minimizeHtml: true,
		minimizeJs: true,
		minimizeCss: true,
	},
	path = require('path'),
	HtmlWebPackPlugin = require("html-webpack-plugin"),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"),
	UglifyJsPlugin = require('uglifyjs-webpack-plugin');
/* console.log('path', path); */
/* console.log('__dirname', __dirname); */

module.exports = (env, argv) => {
	/* console.log('env, argv', env, argv); */
	
	const config = {
		/* entry: {
			'js/index.js': './src/index.js', //js
			'css/main.css': './src/styles/styles.css' //styles
		}, */
		/* отправная точка */
		entry: './src/index.js',
		/* build */
		output: {
			filename: '[name].js',
			path: __dirname + '/build'
		},
		optimization: {
			minimizer: []
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
							options: {
								/* сжатие кода html */
								minimize: __MY_SETUP.minimizeHtml
							}
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
								name: './public/images/[name].[ext]',
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
	};

	/* сжатие кода css */
	if (__MY_SETUP.minimizeCss) {
		config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
	};

	/* сжатие кода js */
	if (__MY_SETUP.minimizeJs) {
		config.optimization.minimizer.push(
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				uglifyOptions: {
				compress: false,
				ecma: 6,
				mangle: true
				},
				sourceMap: true
			})
		);
	};

	return config;
};