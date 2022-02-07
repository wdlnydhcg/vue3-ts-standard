/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-13 20:29:16
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-27 16:07:18
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
      path: "index",
      name: "homePageDemo",
      component: () => import("@/views/Demo/index.vue"),
      meta: {
        title: "",
        icon: "simple-icons:about-dot-me",
        hideMenu: true,
      },
    },
  ],
};
export default demo;
