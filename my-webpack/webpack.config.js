const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const webpack = require('webpack');


const config = {
  	mode: 'development', // "production" | "development" | "none"
    entry: {
		main: './entry.js'
	},
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.bundle.js'
	},
	node: {
		global: false
	},
	target: 'web',
	module: {
		rules: [ 
			{
				test: /\.jsx?$/,
				include: [
				path.resolve(__dirname, "src")
				],
				exclude: [
				path.resolve(__dirname, "node_modules")
				],
				// these are matching conditions, each accepting a regular expression or string
				// test and include have the same behavior, both must be matched
				// exclude must not be matched (takes preferrence over test and include)
				// Best practices:
				// - Use RegExp only in test and for filename matching
				// - Use arrays of absolute paths in include and exclude
				// - Try to avoid exclude and prefer include
				// conditions for the issuer (the origin of the import)
				enforce: "pre",
				// flags to apply these rules, even if they are overridden (advanced option)
				loader: "babel-loader",
				// the loader which should be applied, it'll be resolved relative to the context
				// -loader suffix is no longer optional in webpack2 for clarity reasons
				// see webpack 1 upgrade guide
				options: {
				presets: ["env"]
				},
				// options for the loader
		},  
		{
			test: /\.css|\.scss|\.sass$/,
			use: [
			  { loader: 'style-loader' },
			  {
				loader: 'css-loader',
				options: {
				  modules: true
				}
			  },
			  { loader: 'sass-loader' }
			]
		}
	]
	},
	plugins: [
		// new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html'
		}),

	],
	devServer: {
		 contentBase: './dist',
		 compress: true,
		 port: 9000
	},
  };

module.exports = config

