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
    debug: true,
    devtool: "#eval-source-map",
    module: {
   	loaders: [
  	    {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
   	         loader: "babel-loader"
    	    }
    	]
    }
};
