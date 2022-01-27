/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-21 11:30:27
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-25 10:47:16
 * @Description:
 */
//menu组件的类型
export interface MenuItemType {
  id: string;
  name: string;
  icon?: string;
  path?: string;
  children?: MenuItemType[];
}
//选中的菜单项
export interface MenuState {
  activeKeys: string[];
  // openNames: string[];
  activeSubMenuNames: string[];
}
