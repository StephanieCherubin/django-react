const HtmlWebpackPlugin = require("html-webpack-plugin")
var path = require(“path”);
var webpack = require(‘webpack’);
var BundleTracker = require(‘webpack-bundle-tracker’);

module.exports = {
  context: __dirname,
  entry: ‘./project/frontend/static/frontend/main,
  output: {
     path: path.resolve(‘./project/frontend/static/bundles/‘),
     filename: “[name]-[hash].js”,
 },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        },
      }
    ]
  },
  plugins: [
    new BundleTracker({filename: ‘./project/webpack-stats.json’}),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
}