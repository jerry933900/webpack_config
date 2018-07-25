// 引入path模块
const path = require("path");

// 暴露出去
module.exports = {
  // 入口文件
  entry: "./src/index.js",
  //   C口文件
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: "./dist"
  },
  // 用到的模块
  module: {
    //   使用什么 loader 来解析不同的文件
    // 默认只能解析 .js
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      // 图片文件使用 file-loader来解析
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      // 解析less
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "less-loader" // compiles Less to CSS
          }
        ]
      }
    ]
  }
};
