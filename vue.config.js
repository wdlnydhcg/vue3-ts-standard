/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-15 13:40:39
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-17 23:21:12
 * @Description:
 */

const { defineConfig } = require("@vue/cli-service");
// const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: "source-map",
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: ["./src/design/*.less"],
    },
  },
});
