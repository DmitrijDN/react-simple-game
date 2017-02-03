var path = require('path');

module.exports = {
    entry: './index.jsx',
    output: {
        path: path.resolve(__dirname + '/public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.js$/,
            loader: "eslint-loader",
            exclude: /node_modules/
        }]
    },

    resolve: {
        extensions: ['.js']
    }
};
