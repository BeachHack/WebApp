const path = require('path');

module.exports = {
   entry: './client/index.jss',
   mode: 'development',
   output: {
      path: path.join(__dirname, './client/dist'),
      filename: 'bundle.js'
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            include: [
              path.join(__dirname, 'client'),
            ],
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react'],
            },
         }
      ]
   }
}