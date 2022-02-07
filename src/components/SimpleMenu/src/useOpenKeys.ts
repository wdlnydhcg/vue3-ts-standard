/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-28 14:50:44
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-28 17:20:02
 * @Description:
 */
import { useDebounceFn } from "@vueuse/core";

export function useOpenKeys() {
  const setOpenKeys = useDebounceFn((menuitem) => {
    console.log("handleSelect 11 ", menuitem);
  }, 100);
  return { setOpenKeys };
}
