/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-21 11:30:27
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-21 11:31:28
 * @Description:
 */

export interface MenuItemType {
  id: string;
  name: string;
  icon?: string;
  path?: string;
  children?: MenuItemType[];
}
