/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-13 16:43:46
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-21 16:45:09
 * @Description:
 */
import "./design/index.less";
import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue/es";
import { router } from "./router";
import { setupStore } from "@/store";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);

setupStore(app);
app.use(Antd).use(router);
app.mount("#app");
