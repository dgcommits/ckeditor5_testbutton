const path = require('path');

module.exports = {
  entry: './js/plugins/testbutton/src/index.js',
  output: {
    path: path.resolve(__dirname, 'js/plugins/testbutton/dist'),
    filename: 'testbutton.js',
    library: ['CKEditor5', 'testbutton'],
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  mode: 'production'
};
