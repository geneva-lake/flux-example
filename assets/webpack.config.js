var webpack = require("webpack");

module.exports = {
    entry: "./app",
    resolve: {
        modulesDirectories: [
            "node_modules"
        ]
    },
    output: {
        publicPath: "assets/",
        filename: "bundle.js"
    },
    module: {
   	loaders: [
  	    {
   	         loader: "babel-loader"
    	    }
    	]
    }
};
