const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  entry: './index.js',
  mode: 'development',
  devtool: 'hidden-source-map',
  output: {
    publicPath: 'http://localhost:8002/',
    clean: true,
    chunkLoadTimeout:9999999
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json', '.css', '.scss', '.jpg', 'jpeg', 'png'],
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        loader: 'url-loader',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'app2RemoteEntry.js',
      remotes: {
        'comp': 'app1@http://localhost:8001/app1RemoteEntry.js',
      },
      exposes: {
        './Logo': './src/Logo.jsx',
      },
      shared: { lodash: { singleton: true }},
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
