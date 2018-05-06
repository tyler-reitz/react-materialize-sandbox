const path = require("path")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

module.exports = {
  entry: path.resolve("src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: path.resolve(__dirname, "node_modules"),
        loader: "babel-loader",
        options: {
          presets: [
            "env",
            "react"
          ]
        }
      }
    ]
  },
//  optimization: {
//    splitChunks: {
//      cacheGroups: {
//        commons: { test: /[\\/]node_modules[\\/]/, name: "vendors", chunks: "all" }
//      }
//    }
//  },
  plugins: [
    new BundleAnalyzerPlugin()
 ]
}
