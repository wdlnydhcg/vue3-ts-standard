/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-13 20:29:16
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-24 09:17:46
 * @Description:
 */
import type { AppRouteModule } from "@/router/types";
import { LAYOUT } from "@/router/constant";
const demo: AppRouteModule = {
  path: "/demo",
  name: "About",
  component: LAYOUT,
  redirect: "/demo/index",
  children: [
    {
      path: "table",
      name: "AboutPageDemo",
      component: () => import("@/views/Demo/TableView.vue"),
      meta: {
        title: "主页",
        icon: "simple-icons:about-dot-me",
        hideMenu: true,
      },
    },
    {
      path: "index",
      name: "homePageDemo",
      component: () => import("@/views/Demo/HomeView.vue"),
      meta: {
        title: "",
        icon: "simple-icons:about-dot-me",
        hideMenu: true,
      },
    },
  ],
};
export default demo;
