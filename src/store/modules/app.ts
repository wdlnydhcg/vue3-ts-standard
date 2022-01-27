/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-21 17:01:09
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-22 14:33:02
 * @Description:
 */
import { defineStore } from "pinia";
import { store } from "@/store";
import { deepMerge } from "@/utils";
import type { MenuSetting, ProjectConfig } from "#/config";
interface AppState {
  projectConfig: ProjectConfig | null;
}
export const useAppStore = defineStore({
  id: "app",
  state: (): AppState => ({
    projectConfig: {
      menuSetting: {
        collapsed: false,
      },
    },
  }),
  getters: {
    getProjectConfig(): ProjectConfig {
      return this.projectConfig || ({} as ProjectConfig);
    },
    getMenuSetting(): MenuSetting {
      return this.getProjectConfig.menuSetting;
    },
  },
  actions: {
    setProjectConfig(config: DeepPartial<ProjectConfig>): void {
      this.projectConfig = deepMerge(this.projectConfig || {}, config);
      // Persistent.setLocal(PROJ_CFG_KEY, this.projectConfig);
    },
  },
});
// Need to be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(store);
}
