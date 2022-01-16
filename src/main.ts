/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-13 16:43:46
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-16 14:40:34
 * @Description:
 */
import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue/es";
import { router } from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);
console.log("Antd ", Antd);

app.use(Antd).use(router).use(store);
app.mount("#app");
