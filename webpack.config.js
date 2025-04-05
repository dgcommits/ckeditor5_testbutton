const path = require('path');

module.exports = {
  entry: './js/ckeditor5_plugins/testButton/index.js',
  output: {
    path: path.resolve(__dirname, 'js/build'),
    filename: 'testbutton.js',
    library: ['CKEditorPlugins', 'TestButton'],
    libraryTarget: 'umd'
  },
  mode: 'development',
  optimization: {
    minimize: false
  }
};
