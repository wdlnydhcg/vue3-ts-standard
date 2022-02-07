/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-13 20:29:31
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-27 16:06:50
 * @Description:
 */
import type { AppRouteModule } from "@/router/types";

import { LAYOUT } from "@/router/constant";

const dashboard: AppRouteModule = {
  path: "/dashboard",
  name: "Dashboard",
  component: LAYOUT,
  redirect: "/dashboard/index",
  meta: {
    orderNo: 10,
    icon: "ion:grid-outline",
  },
  children: [
    {
      path: "index",
      name: "Analysis",
      component: () => import("@/views/Dashboard/index.vue"),
    },
    // {
    //   path: 'workbench',
    //   name: 'Workbench',
    //   component: () => import('@/views/dashboard/workbench/index.vue')
    // }
  ],
};

export default dashboard;
