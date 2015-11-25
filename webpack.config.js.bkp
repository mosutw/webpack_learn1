var path = require('path');

var config = {
    entry: ['webpack/hot/dev-server',path.resolve(__dirname, 'app/main.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: ['babel'],
            query:
   	    {
		presets:['react']
	    }
        }]
    }
};

module.exports = config;

