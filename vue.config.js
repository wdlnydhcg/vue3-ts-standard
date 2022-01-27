/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-15 13:40:39
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-27 10:49:02
 * @Description:
 */

const { defineConfig } = require("@vue/cli-service");
// const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/",
  configureWebpack: {
    devtool: "source-map",
    target: "web",
  },
  devServer: {
    hot: false,
    // host: "0.0.0.0",
  },

  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: ["./src/design/*.less"],
    },
  },
});
