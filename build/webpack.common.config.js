'use strict';
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const CopyPlugin = require('copy-webpack-plugin');
// const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const cssLoader = require('./css-loader.config');




// 根目录
const home = path.resolve(__dirname, '..');
module.exports = {
  entry: {
    app: [
      path.resolve(home, './src/main.ts')
    ]
  },
  devtool: "source-map",
  // Defaults to 'browserslist' or to 'web' when no browserslist configuration was found.
  target: 'web', // 设置.browserslistrc 必须设置target, 否则浏览器端热更新会失效
  // context: path.join(home),
  context: home,
  output: {
    // hashFunction: "xxhash64",
    path: path.join(home, './dist'),
    filename: 'js/[name].[contenthash:8].js',
    publicPath: '/',
    chunkFilename: 'js/[id].[chunkhash:8].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.vue', '.jsx', '.js', '.json'],
    alias: {
      '@': path.join(home, 'src'),
      '#': path.join(home, 'types'),
      vue: '@vue/runtime-dom',
    },
    modules: [
      'node_modules',
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      {
        test: /\.tsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        type: "asset",
        generator: {
          filename: "fonts/[name].[hash:8][ext]",
        },
      },
      {
        test: /\.(svg|gif|png|jpe?g)(\?\S*)?$/,
        type: "asset",
        generator: {
          filename: "img/[name].[hash:8][ext]",
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'vue-style-loader',
            options: {
              sourceMap: false,
              shadowMode: false
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              postcssOptions: {
                plugins: [
                  function () { /* omitted long function */ }
                ]
              }
            }
          }
        ]
      },

      {
        test: /\.less$/,
        use: [
          {
            loader: "vue-style-loader",
            options: {
              sourceMap: false,
              shadowMode: false,
            },
          },
          {
            loader: "css-loader",   // 转化 CSS 为 CommonJS
            options: {
              sourceMap: false,
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: false,
              postcssOptions: {
                plugins: [
                  function () {
                    /* omitted long function */
                  },
                ],
              },
            },
          },
          {
            loader: "less-loader",  // 编译 Less 为 CSS
            options: {
              // sourceMap: false,
              // javascriptEnabled: true,
              lessOptions: {

                // modifyVars:{
                //   "hack":`true;@import ${require.resolve("../src/design/index.less")}`,
                //   // "namespace": 'vben',
                // },
                // javascriptEnabled: true,
              }
            },
          },
          {
            loader: "style-resources-loader",
            options: {
              // preProcessor: 'less',
              patterns: [
                path.resolve(home, 'src/design/*.less'),
                path.resolve(home, 'src/design/var/*.less'),
              ],
              injector: 'append' // 如果在样式文件之后导入就加此行配置

            },
          },
        ],
      }
    ],
  },
  plugins: [
    // 以下为联邦模块，v5 新加核心功能，实际应用可注释
    // new ModuleFederationPlugin({
    //   name: 'demo',
    //   filename: 'remoteEntry.js',
    //   remotes: {
    //     home: 'home@http://localhost:3001/remoteEntry.js',
    //   },
    //   exposes: {},
    // }),
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      title: 'vue3-webpack5-typescript',
      scriptLoading: "defer",
      iconImg: path.join(home, './public/favicon.ico'),
      template: path.join(home, './public/index.html'),
      // chunks: ['main'],
      // inlineSource: 'runtime~.+\\.js'
    }),
    // new CopyPlugin(
    //   {
    //     patterns: [{
    //       from: path.join(home, 'public'),
    //       to: path.join(home, 'dist'),
    //       toType: 'dir',
    //       globOptions: {
    //         dot: false,
    //         ignore: [
    //           '**/index.html'
    //         ]
    //       }
    //     }]
    //   }
    // ),
    new VueLoaderPlugin(),
    // new ProgressBarPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    })
  ]
}
