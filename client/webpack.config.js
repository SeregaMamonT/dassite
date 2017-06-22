var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'app');

var config = {
    entry: APP_DIR + '/main.js',
    output: {
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};


module.exports = config;