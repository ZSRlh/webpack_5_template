const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    filename: './js/built.js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    // 详细的plugins配置
    // new HTMLWebpackPlugin(),   // 不添加配置项，默认创建一个空的html文件，引入打包输出的所有文件
    new HTMLWebpackPlugin({ // 添加配置项后，以template路径下的html文档为模版，创建html文件，并引入打包好的js文件
      template: './src/index.html'
    }),
  ],
  devServer: {
    port: 8080,
    open: true,
  }
}