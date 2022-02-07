/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-27 15:17:31
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-27 15:17:32
 * @Description:
 */
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path: string): boolean {
  return /^(https?:|mailto:|tel:)/.test(path);
}
