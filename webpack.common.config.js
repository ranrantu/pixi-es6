const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry:{
        'app':'./src/js/index.js',
        'vendor':['./src/js/pixi.min.js','es6-tween']
    },
    output:{
        path:path.resolve(__dirname,'./dist/'),
        filename:'[name].[chunkHash].js',
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{
                    presets:[
                        ['env',{modules:false}]
                    ],
                    plugins:[
                        'babel-plugin-transform-class-properties'
                    ]
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    // if img size less than 100,compile them to base64
                    limit: 100,
                    name: path.join('assets/[name].[hash:7].[ext]')
                }
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor','manifest'],
            minChunks: Infinity,
        }),
        new webpack.HashedModuleIdsPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
}
