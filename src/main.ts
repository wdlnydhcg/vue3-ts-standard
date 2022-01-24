/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-13 16:43:46
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-24 17:26:44
 * @Description:
 */
import "./design/index.less";
import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue/es";
import { router } from "./router";
import { setupStore } from "@/store";
import "ant-design-vue/dist/antd.css";

import PerfectScrollbar from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";

const app = createApp(App);

setupStore(app);
app.use(PerfectScrollbar).use(Antd).use(router);
app.mount("#app");
