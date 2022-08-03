const path = require("path");
const webpack = require("webpack");
const ChildProcess = require("child_process"); // 터미널 명령어를 실행할 수 있음
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "development",
  entry: {
    main: "./app.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader",
          "css-loader",
        ],
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
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/, // node_modules에 있는 코드는 제외
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `
        Build Date: ${new Date().toLocaleDateString("ko", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
        Commit Version: ${ChildProcess.execSync("git rev-parse --short HEAD")}
        Author: ${ChildProcess.execSync("git config user.name")}
      `,
    }),
    new webpack.DefinePlugin({
      TWO: "1+1", // 값이 아니라 문자열 자체를 넣고 싶으면 JSON.stringify('1+1')
      "api.domain": JSON.stringify("http://dev.api.domain.com"),
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      templateParameters: {
        env: process.env.NODE_ENV === "development" ? "(개발용)" : "",
      },
      minify:
        process.env.NODE_ENV === "production"
          ? {
              collapseWhitespace: true, // 빈칸 제거
              removeComments: true, // 주석 제거
            }
          : false,
    }),
    new CleanWebpackPlugin(),
    ...(process.env.NODE_ENV === "production"
      ? [new MiniCssExtractPlugin({ filename: "[name].css" })]
      : []),
  ],
};
