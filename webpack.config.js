const path = require('path');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public/js',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test:   /\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['react', 'es2015']
        }
      }
    ],
  }
  // plugins: [
  //   new StaticSiteGeneratorPlugin({
  //     crawl: true
  //   })
  // ]
}