/**
 * Base Webpack config used in all other configurations
 */

const path = require('path');

const {
	baseFolder,
	publicPath,
} = require('./globalConfiguration');

const { VueLoaderPlugin } = require('vue-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    mode: 'development',
	context: baseFolder,
	output: {
		publicPath,
        pathinfo: false,
        filename: '[name].js',
		chunkFilename: '[name].js',
		path: path.resolve('dist')
	},
	resolve: {
		alias: {
			'@components': path.join(baseFolder, 'components/'),
			'@componentsVue': path.join(baseFolder, 'componentsVue/')
		},
		extensions: ['.js', '.ts', '.vue']
	},
	entry: {
		app: [path.join(__dirname, '../entry/index.js')]
	},
	plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(['dist'], {
			root: baseFolder
		}),
		new ForkTsCheckerWebpackPlugin({
			eslint: {
				files: [
					'components/*.js',
					'componentsVue/*.vue',
					'webpack/entry/*.js'
				]
			},
			typescript: {
				diagnosticOptions: {
					semantic: true,
					syntactic: true
				},
				mode: 'write-references', // encouraged to use with babel-loader to improve compilation-time
				extensions: {
					vue: {
						enabled: true,
						compiler: '@vue/compiler-sfc'
					}
				}
			}
		}),
		new HtmlWebpackPlugin({
			template: 'public/index.html'
		})
	],
	module: {
		rules: [
			// Transpile our code
			{
				test: /\.(js|ts)$/,
				include:
					/components|componentsVue/,
				exclude: file =>
					/node_modules/.test(file) && !/\.vue\.js/.test(file),
				use: [
					{
						loader: 'thread-loader'
					},
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true
						}
					}
				]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
    },
};


module.exports = config;
