/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-13 16:43:46
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-14 19:36:23
 * @Description:
 */
const { defineConfig } = require('@vue/cli-service')
// const path = require('path')
console.log(defineConfig())
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      // 别名配置
      // alias: {
      //   '@/': path.resolve(__dirname,'src'),
      // }
    }
  }
})
