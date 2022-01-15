/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-13 16:43:46
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-15 14:31:19
 * @Description:
 */
import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
