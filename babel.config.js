module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				modules: false,
				useBuiltIns: 'usage',
				corejs: '3.0'
			}
		],
		['@babel/preset-typescript']
	],
	plugins: [
		'@babel/plugin-transform-runtime',
		'@babel/plugin-syntax-dynamic-import'
	],
	// see https://github.com/webpack/webpack/issues/4039#issuecomment-477525581
	sourceType: 'unambiguous'
};
