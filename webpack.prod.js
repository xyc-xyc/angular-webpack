const common_config = require("./webpack.config");
var webpack = require('webpack');
var merge = require('webpack-merge');

module.exports = merge(common_config, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env.DATA_URL_BASE': JSON.stringify('')
        })
    ]
});
