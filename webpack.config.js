const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'sdk.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'CreditScoreSDK',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devtool: 'source-map',
};
