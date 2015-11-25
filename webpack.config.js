var path = require('path');

var config = {
    entry: ['./app/main.js'],
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: ['jsx-loader'],
            query:
   	    {
		presets:['react']
	    }
        }]
    }
};

module.exports = config;

