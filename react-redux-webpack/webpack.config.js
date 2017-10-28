const { join }  = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = {
  src: join(__dirname, 'src'),
  dist: join(__dirname, 'dist')
}

module.exports = {
  //Content 
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    join(paths.src, 'index')
  ],
  // A SourceMap without column-mappings ignoring loaded Source Maps. 
  devtool: 'cheap-module-source-map',
  plugins: [
    //simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates or use your own loader.
    new HtmlWebpackPlugin({
      title: 'React redux webpack',
      template: join(paths.src, 'index.html')
    }),
    //Auto replacement of page when i save some file, even css
    new webpack.HotModuleReplacementPlugin()
  ],

  output: {
    path: paths.dist,
    filename: '[name].bundle.js',
    publicPath: '/',
    sourceMapFilename: '[name].map',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.js$/,
        include: paths.src,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['env', { modules: false }], 'stage-0', 'react'],
            plugins: [
              'react-hot-loader/babel',
              ['transform-runtime', {
                helpers: false,
                polyfill: false,
                regenerator: true
              }]
            ]
          }
        }
      }    
    ]
  }
}