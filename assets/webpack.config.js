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
    plugins: [
      new webpack.DefinePlugin({ "global.GENTLY": false })
    ],
    module: {
   	loaders: [
  	    {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
   	         loader: "babel-loader"
    	  }
    	]
    },
    node: {
    __dirname: true,
   }
};
