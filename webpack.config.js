var webpack = require('webpack');
var path = require('path');

const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

let CHUNK_PATH = path.join(__dirname, '/public/javascripts/routers/');
let OUTPUT_PATH = path.join(__dirname, '/public/output/');
let PUBLIC_PATH = '/static/';

const config = {
	devtool: 'eval-source-map',
	entry: {
		'targetSearch': [path.join(CHUNK_PATH, 'targetSearch.js')],
		'clueManage': [path.join(CHUNK_PATH, 'clueManage.js')],
	},
	output:{
		path: OUTPUT_PATH,
		filename: 'js/[name].bundle.js',
		publicPath: PUBLIC_PATH,
	},
	module:{
		rules:[ //loaders
			{
				test: /\.js|jsx$/,
				loader: 'babel-loader', //loader
				options: { presets: ["es2015", "react"] },
				exclude: /node_modules/,
			},
			{
				test: /\.less|css$/,
				use: ExtractTextWebpackPlugin.extract({
					fallback: 'style-loader',
					use: [
						{loader: 'css-loader'},
						{loader: 'postcss-loader'},
						{loader: 'less-loader'},
					],
				}),
			},
			{
				test: /\.jade$/,
				use: 'pug-loader',
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.css', '.less', '.jade'],
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextWebpackPlugin({
			filename: 'css/[name][hash:8].css',
		}),
		new HtmlWebpackPlugin({
			filename: path.join(OUTPUT_PATH, 'pages/targetSearch.html'),
			chunks: ['targetSearch'],
			template: path.join(OUTPUT_PATH, 'assets/template.jade'),
			title: '目标检测',
		}),
		new HtmlWebpackPlugin({
			filename: path.join(OUTPUT_PATH, 'pages/clueManage.html'),
			chunks: ['clueManage'],
			template: path.join(OUTPUT_PATH, 'assets/template.jade'),
			title: '线索管理',
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [autoprefixer({browsers: ['>1%']})],
			}
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production'),
			},
		}),

	],
};

module.exports = config;