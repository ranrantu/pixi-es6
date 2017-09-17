const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry:{
        'app':'./src/js/index.js',
        'vendor':'./src/js/pixi.min.js'
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
                        'env'
                    ],
                    plugins:[
                        'babel-plugin-transform-class-properties'
                    ]
                }
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/entry.html'
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
