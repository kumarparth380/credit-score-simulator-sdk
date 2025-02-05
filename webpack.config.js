const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',          // Entry point for the SDK
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',                 // Make sure the assets are served from the root
    filename: 'credit-score-simulator-sdk.js',           // Output bundle file
    library: 'CreditScoreSimulatorSDK',  // Expose the SDK as a global object
    libraryTarget: 'umd',  // Universal Module Definition for compatibility
    globalObject: 'this',  // To ensure it works in both browsers and Node.js
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],  // Handle file extensions
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // This will match .js and .jsx files
        use: 'babel-loader', // Use babel-loader for JSX
        exclude: /node_modules/, // Exclude node_modules folder
      },
      {
        test: /\.tsx?$/,              // Handle .ts and .tsx files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  devServer: {
    // contentBase: './dist',            // Serve from the dist folder
    static: {
        directory: path.join(__dirname, 'dist'), // Serve files from the dist folder
    },
    hot: true,                        // Enable hot module replacement
    open: true,                       // Open browser on server start
    historyApiFallback: true,         // Allow client-side routing
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // HTML template
    }),
  ],
};
