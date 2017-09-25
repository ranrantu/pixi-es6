const webpack = require('webpack');
const merge = require('webpack-merge');
const commonWebpackConfig = require('./webpack.common.config');

const webpackConfig = commonWebpackConfig;

webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        comments: false,
        compress: {
            warnings: false
        }
    })
);

module.exports = webpackConfig;
