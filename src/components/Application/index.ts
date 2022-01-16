/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-13 17:09:31
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-16 16:31:31
 * @Description:
 */
import { withInstall } from "@/utils";
import appProvider from "./src/AppProvider.vue";
export { useAppProviderContext } from "./src/useAppContext";
export const AppProvider = withInstall(appProvider);
