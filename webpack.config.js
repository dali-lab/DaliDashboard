const ExtractTextPlugin = require('extract-text-webpack-plugin');

const autoprefixer = require('autoprefixer');

module.exports = {
  stats: { colors: true },
  devtool: 'inline-source-map',
  entry: ['babel-polyfill', './src'],
  output: {
    path: 'build',
    publicPath: 'build/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false',
      ],
    },
    {
      test: /\.scss/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader!postcss-loader'),
      exclude: /flexboxgrid/,
    },
    {
      test: /\.json$/,
      loader: 'json-loader',
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
      include: /flexboxgrid/,
    },
      // You could also use other loaders the same way. I. e. the autoprefixer-loader
    ],
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  postcss: [autoprefixer({ browsers: ['last 2 versions'] })],
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],
  dotenv: { fs: 'empty' },
};
