const path=require('path');
const ExtractTextPlugin=require('extract-text-webpack-plugin');

module.exports=(env)=>{
	const isProduction=env==='production';
	const CSSExtract=new ExtractTextPlugin('styles.css');
	return {
		entry: './src/app.js',
		output:{
			path: path.join(__dirname,'public','dist'),
			filename:'bundle.js'
		},
		module:{
			rules:[
			{
				test: /\.js$/,
				exclude:/node_modules/,
				use:{
					loader:'babel-loader',
					options:{
						presets: ['@babel/preset-env','@babel/preset-react',{
							'plugins':['babel-plugin-transform-class-properties']
						}]
					}
				}
			},
			{
				test: /\.s?css$/,
				use:CSSExtract.extract({
					use:[
					  {
					  	loader: 'css-loader',
					  	options: {
					  		sourceMap: true
					  	}
					  },
					  {
					  	loader: 'sass-loader',
					  	options: {
					  		sourceMap: true
					  	}
					  }
					]
				})
			}]
		},
		plugins:[
			CSSExtract
		],
		devtool:isProduction? 'source-map': 'inline-source-map',
		devServer:{
			contentBase:path.join(__dirname,'public'),
			historyApiFallback:true,
			publicPath: '/dist/'
		}
	};
}