/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-25 15:58:20
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-27 10:13:54
 * @Description: 
 */
'use strict';
const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.config');
const home = path.resolve(__dirname, '..');

module.exports = merge(
  commonConfig,
  {
    mode: 'development',
    // devtool: 'eval-source-map', // 首次构建比较慢，二次构建比较快，源码映射source
    devServer: {
      // contentBase: '../dist',
     // noInfo: true,
      historyApiFallback: true,
      compress: true,
      port: 3333,
      // hot: true
      hot:false
    },
    watchOptions: {
      poll: 1000, // 每秒检查一次变动
      aggregateTimeout: 600, // 防抖 我一直输入代码
      ignored: /node_modules/, // 不需要进行监控哪个文件
    },
  }
)