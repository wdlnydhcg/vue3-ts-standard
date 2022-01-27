/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-16 16:20:52
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-17 16:08:06
 * @Description:
 */
import { InjectionKey, Ref } from "vue";
import { createContext, useContext } from "@/hooks/core/useContext";

export interface AppProviderContextProps {
  prefixCls: Ref<string>;
  isMobile: Ref<boolean>;
}

// 定义注入 key
const key: InjectionKey<AppProviderContextProps> = Symbol();

// 创建注入组件和响应式数据
export function createAppProviderContext(context: AppProviderContextProps) {
  return createContext<AppProviderContextProps>(context, key);
}
// 子组件使用响应式数据
export function useAppProviderContext() {
  return useContext<AppProviderContextProps>(key);
}
