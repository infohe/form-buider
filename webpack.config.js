// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/FormBuilder.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'custom-form-builder.js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  externals: {
    // Specify any external libraries or modules that should not be bundled
    // Example: 'react': 'React',
  },
};
