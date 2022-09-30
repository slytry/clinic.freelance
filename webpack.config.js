// webpack.config.js
const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "/src/index.js"),
  },

  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },

  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },

  module: {
    rules: [
      // изображения
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
    ],
  },

  module: {
    rules: [
      // шрифты и SVG
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
};
