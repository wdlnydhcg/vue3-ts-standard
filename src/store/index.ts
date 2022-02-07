/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-21 11:14:54
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-29 17:25:36
 * @Description:
 */
import type { App } from "vue";
import { watch } from "vue";
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-persistedstate-plugin";
const store = createPinia();
store.use(createPersistedState());

export function setupStore(app: App<Element>) {
  app.use(store);

  // watch(
  //   store.state,
  //   (state) => {
  //     localStorage.setItem("state", JSON.stringify(state["app-multiple-tab"]));
  //   },
  //   { deep: true }
  // );
}

export { store };
