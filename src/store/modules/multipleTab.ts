/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-28 15:55:08
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-02-08 11:17:49
 * @Description:
 */
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import type { RemovableRef } from "@vueuse/core";
import { RouteLocationNormalized, useRouter } from "vue-router";
import { router } from "@/router";

declare type RouteNormalized = RouteLocationNormalized | null;

export interface MultipleTabState {
  tabList: RouteLocationNormalized[];
  activeTab: RouteNormalized;
}
// console.log("xxxx", useLocalStorage("state", null).value);

export const useMultipleTabStore = defineStore({
  id: "app-multiple-tab",
  state: (): MultipleTabState => ({
    tabList: [],
    activeTab: null,
  }),
  getters: {
    getTabList(): RouteLocationNormalized[] {
      return this.tabList;
    },
    getActiveTab(): RouteNormalized {
      return this.activeTab;
    },
  },
  actions: {
    addTab(route: RouteLocationNormalized): void {
      if (this.getTabList.filter((item) => item.path === route.path).length === 0) {
        this.tabList.push(route);
      }
      this.activeTab = route;
    },
    setActiveTab(route: RouteLocationNormalized) {
      console.log("route", route);

      this.activeTab = route;

      // console.log("setActiveTab", route.path);
      // router.push(route.path);
    },
  },
});
