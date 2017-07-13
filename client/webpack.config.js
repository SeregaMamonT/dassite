var path = require('path');

var APP_DIR = path.resolve(__dirname, 'app');

var config = {
    entry: APP_DIR + '/main.js',
    output: {
        path: path.resolve(process.env.OUTPUT_DIR),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
			{
				test: /\.vue$/,
				exclude: /node_modules/,
				loader: 'vue-loader'
			},
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
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