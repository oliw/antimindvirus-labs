const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtensionReloader = require("webpack-extension-reloader");

module.exports = {
  context: __dirname,
  entry: {
    "content-script": "./src/content-scripts/index.js",
    options: "./src/options/index.js",
    background: "./src/background/index.js",
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
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
    new ExtensionReloader({
      manifest: path.resolve(__dirname, "src/manifest.json"),
    }),
  ],
};
