/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-16 16:04:46
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-21 19:09:21
 * @Description:
 */
import type { App, Plugin } from "vue";
import { isObject } from "@/utils/is";
export const withInstall = <T>(component: T, alias?: string) => {
  const comp = component as any;
  comp.install = (app: App) => {
    app.component(comp.name || comp.displayName, component);
    if (alias) {
      app.config.globalProperties[alias] = component;
    }
  };
  return component as T & Plugin;
};
export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
  }
  return src;
}
export const noop = () => {};
