/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-16 15:03:30
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-16 16:29:23
 * @Description:
 */
import { useAppProviderContext } from "@/components/Application";
export function useDesign(scope: string) {
  const values = useAppProviderContext();
  return {
    prefixCls: `${values.prefixCls}-${scope}`,
    // prefixVar: values.prefixCls,
  };
}
