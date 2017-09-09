var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'src/js');
var APP_DIR = path.resolve(__dirname, 'src/js');

var config = {
  //comment out below line when not using ip to test on differnt machine
  // devServer: {
  //   compress: true,
  //   disableHostCheck: true // That solved it
  // },
  //comment out below line for production
  devtool: "inline-sourcemap",  
  entry: ['babel-polyfill', APP_DIR + '/App.js'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-0'],
              plugins: ['transform-class-properties', 'transform-decorators-legacy']
            }
          }
        ],
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }

      // {
      //   test: /\.scss$/,
      //   loaders: ExtractTextPlugin.extract(
      //       'style',
      //       'css?sourceMap!sass?sourceMap'
      //   )
      // }
    ]
  },
  //un-comment the plugins below for production
  // plugins: [
  //     new webpack.NoEmitOnErrorsPlugin(),
  //     new webpack.optimize.UglifyJsPlugin({
  //       mangle: false, sourcemap: false, minimize: false, comments: false, warnings: false, compress: {
  //         warnings: false, drop_console: true, drop_debugger: true, pure_funcs: ['console.error', 'console.info']
  //       }
  //     }),
  //     new webpack.DefinePlugin({ // <-- key to reducing React's size
  //       'process.env': {
  //         'NODE_ENV': JSON.stringify('production')
  //       }
  //     }),
  //     new webpack.optimize.AggressiveMergingPlugin(),//Merge chunks
  //   ]
};

module.exports = config;