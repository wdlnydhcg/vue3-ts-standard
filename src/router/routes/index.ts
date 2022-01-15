/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-14 15:25:54
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-15 14:32:19
 * @Description:
 */
import type { AppRouteRecordRaw, AppRouteModule } from "@/router/types";
import { PageEnum } from "@/enums/pageEnum";
const files = require.context("./modules", false, /\.ts$/);
const routeModuleList: AppRouteModule[] = [];
files.keys().forEach((key) => {
  routeModuleList.push(files(key).default);
});

export const RootRoute: AppRouteRecordRaw = {
  path: "/",
  name: "Root",
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: "Root",
  },
};
export const basicRoutes = [RootRoute, ...routeModuleList];

console.log("basicRoutes", basicRoutes);
