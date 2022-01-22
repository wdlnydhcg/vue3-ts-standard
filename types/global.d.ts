/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-21 11:14:54
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-21 17:22:27
 * @Description:
 */
export declare global {
  declare type Recordable<T = any> = Record<string, T>;
  declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
  };
}
