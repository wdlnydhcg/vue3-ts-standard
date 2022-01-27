/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-15 14:28:03
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-27 10:44:48
 * @Description:
 */
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      {
        libraryName: "ant-design-vue",
        libraryDirectory: "es",
        style: "css",
      },
    ],
  ],
};
