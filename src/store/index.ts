/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-21 11:14:54
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-21 15:56:01
 * @Description:
 */
import type { App } from "vue";
import { createPinia } from "pinia";

const store = createPinia();

export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };
