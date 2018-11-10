const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx$/,
        include: path.resolve(__dirname, '../'),
        loader: ['awesome-typescript-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['.tsx'],
  },
};
