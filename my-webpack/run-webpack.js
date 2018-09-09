const webpack = require('webpack');
const config = require('./webpack.config')

// 通过node执行webpack
webpack(config, (err, status) => {
	// console.log(err, status);
}).run((err, stats) => {

})
