/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-21 15:21:32
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-22 14:35:15
 * @Description:
 */
import { computed, unref } from "vue";
import { useAppStore } from "@/store/modules/app";
import type { MenuSetting } from "#/config";
export function useMenuSetting() {
  const appStore = useAppStore();

  const getCollapsed = computed(() => appStore.getMenuSetting.collapsed);

  function setMenuSetting(menuSetting: Partial<MenuSetting>): void {
    appStore.setProjectConfig({ menuSetting });
  }
  function toggleCollapsed() {
    console.log("getCollapsed  22", unref(getCollapsed));

    setMenuSetting({
      collapsed: !unref(getCollapsed),
    });
  }
  return {
    getCollapsed,
    setMenuSetting,
    toggleCollapsed,
  };
}
