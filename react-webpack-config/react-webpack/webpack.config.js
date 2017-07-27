var path = require('path');
const webpack = require('webpack');
const publicPath = '/dist/assets/';


module.exports = {
   entry: './src/index.js',
   devtool: 'cheap-module-source-map',
   plugins: [
    new webpack.HotModuleReplacementPlugin() // Enable HMR
  ],

  output: {
    path: path.join(__dirname, '/dist/assets/'),
    filename: '[name].bundle.js',
    publicPath: publicPath,
    sourceMapFilename: '[name].map'
  },

  devServer: {
    port: 8080,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath: publicPath
  },
module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}