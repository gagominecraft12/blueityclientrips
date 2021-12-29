const path = require('path');

module.exports = {
  entry: 'https://gagominecraft12.github.io/blueityclientrips/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};