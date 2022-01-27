/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-19 17:14:15
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-19 17:14:15
 * @Description:
 */
declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}
