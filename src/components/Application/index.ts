/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-13 17:09:31
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-16 21:52:58
 * @Description:
 */
import { withInstall } from "@/utils";
import appLogo from "./src/AppLogo.vue";
import appProvider from "./src/AppProvider.vue";
export { useAppProviderContext } from "./src/useAppContext";

export const AppLogo = withInstall(appLogo);
export const AppProvider = withInstall(appProvider);
