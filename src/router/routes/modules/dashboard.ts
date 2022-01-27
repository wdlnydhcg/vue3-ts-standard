/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-13 20:29:31
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-24 09:07:34
 * @Description:
 */
import type { AppRouteModule } from "@/router/types";

import { LAYOUT } from "@/router/constant";

const dashboard: AppRouteModule = {
  path: "/dashboard",
  name: "Dashboard",
  component: LAYOUT,
  redirect: "/dashboard/analysis",
  meta: {
    orderNo: 10,
    icon: "ion:grid-outline",
  },
  children: [
    {
      path: "analysis",
      name: "Analysis",
      component: () => import("@/views/Demo/HomeView.vue"),
    },
    // {
    //   path: 'workbench',
    //   name: 'Workbench',
    //   component: () => import('@/views/dashboard/workbench/index.vue')
    // }
  ],
};

export default dashboard;
