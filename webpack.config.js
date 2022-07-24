const path = require("path");
const MyWebpackPlugin = require("./my-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        type: "asset", // 40KB(default) 미만은 inline, 이상은 resource로 대처
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024, // 기준을 20KB 로 변경
          },
        },
      },
    ],
  },
  plugins: [new MyWebpackPlugin()],
};
