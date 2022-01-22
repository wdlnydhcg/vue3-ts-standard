/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-21 16:56:39
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-21 17:21:33
 * @Description:
 */

//菜单导航栏
export interface MenuSetting {
  collapsed: boolean;
}

//项目的配置项
export interface ProjectConfig {
  menuSetting: MenuSetting;
}
