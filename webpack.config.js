const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/js',
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
}