/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-15 13:40:39
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-16 17:31:35
 * @Description:
 */

const { defineConfig } = require("@vue/cli-service");
// const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devtool: "source-map",
  },
});
