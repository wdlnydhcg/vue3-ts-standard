/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-17 16:06:59
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-17 16:07:00
 * @Description:
 */
import { useAppProviderContext } from "@/components/Application";
import { computed, unref } from "vue";

export function useAppInject() {
  const values = useAppProviderContext();

  return {
    getIsMobile: computed(() => unref(values.isMobile)),
  };
}
