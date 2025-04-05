const path = require('path');

module.exports = {
  entry: './src/testbutton.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'testbutton.js',
    library: ['CKEditorPlugins', 'TestButton'],
    libraryTarget: 'umd'
  },
  mode: 'development',
  optimization: {
    minimize: false
  }
};
