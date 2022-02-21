/**
 * Provides global Configuration used across several webpack config files.
 */

const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;

const globalConfig = {
	baseFolder: path.resolve(__dirname, '../../'),
	defaultEntries: path.resolve(__dirname, '../entry', 'index.js')
};

const environmentSpecificConfig = {
		publicPath: '/',
		generateSourceMaps: true
	};

module.exports = {
	isDev,
	isProd,
	...globalConfig,
	...environmentSpecificConfig
};
