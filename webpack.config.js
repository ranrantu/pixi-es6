const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry:'./src/js/index.js',
    output:{
        path:path.resolve(__dirname,'./dist/js'),
        publicPath: "dist",
        filename:'bundle.js',
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{
                    presets:['es2015','stage-0']
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename:'../index.html'
        }),
        new webpack.HashedModuleIdsPlugin({
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
}