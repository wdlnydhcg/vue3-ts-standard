/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-28 16:15:26
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-28 17:10:41
 * @Description:
 */
import type { Router } from "vue-router";
import { watch } from "vue";
import { useRoute } from "vue-router";
export function listenRouter() {
  const route = useRoute();
  const path = route.path;
  return {
    getCurrentPath: () => path,
  };
}
