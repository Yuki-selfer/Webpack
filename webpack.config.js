var webpack = require("webpack");

var path = require("path");



var BUILD_DIR = path.resolve(__dirname, "build");

var APP_DIR = path.resolve(__dirname, "src");



var config = {

  entry: APP_DIR + "/index.jsx",

  output: {

    path: BUILD_DIR,

    filename: "bundle.js"

  },

  module: {

    rules: [

      {

        test: /\.(js|jsx)$/,

        exclude: /node_modules/,

        use: {

          loader: "babel-loader"

        }

      }

    ]

  },
  devServer: {
      port: 3000,
      contentBase: "./dist"
  },
  // plugins: [
  //     new HtmlWebpackPlugin(
  //         {
  //             template: "index.html",
  //             inject: true,
  //             sourceMap: true,
  //             chunksSortMode: "dependency"

  //         }
  //     ),
  //     new CleanWebpackPlugin(["dist"])
  // ],
  
};



module.exports = config;