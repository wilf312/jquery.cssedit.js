const path = require('path');

module.exports = {
  entry: './src/js/cssedit.js',
  output: {
    filename: 'cssedit.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
