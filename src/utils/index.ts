/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-16 16:04:46
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-19 17:13:06
 * @Description:
 */
import type { App, Plugin } from "vue";
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

export const noop = () => {};
