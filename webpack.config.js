const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtensionReloader = require("webpack-extension-reloader");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  context: __dirname,
  entry: {
    "content-script": "./src/content-scripts/index.js",
    options: "./src/options/index.js",
    background: "./src/background/index.js",
    popup: "./src/popup/index.js",
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js",
  },
  mode: "development",
  resolve: {
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin({
      patterns: [
        {from: "./src/manifest.json", to: "./manifest.json"},
        {from: "./src/assets", to: "./assets"},
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./src/options/template.html",
      chunks: ["options"],
      filename: "options.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/popup/template.html",
      chunks: ["popup"],
      filename: "popup.html",
    }),
    new ExtensionReloader({
      manifest: path.resolve(__dirname, "src/manifest.json"),
    }),
  ],
};
