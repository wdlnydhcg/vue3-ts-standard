/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-21 15:21:32
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-21 15:50:17
 * @Description:
 */
import { computed, unref, ref } from "vue";
export function useMenuSetting() {
  const appStore = useAppStore();

  const getCollapsed = computed(() => appStore.getMenuSetting.collapsed);

  function setMenuSetting(menuSetting: Partial<MenuSetting>): void {
    appStore.setProjectConfig({ menuSetting });
  }
  function toggleCollapsed() {
    setMenuSetting({
      collapsed: !unref(getCollapsed),
    });
  }
}
