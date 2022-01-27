/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-21 19:08:36
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-21 19:08:36
 * @Description:
 */
export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`;
}

export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, "Object");
}
