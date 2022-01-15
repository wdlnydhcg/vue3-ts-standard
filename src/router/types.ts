/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-13 19:59:20
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-14 16:55:15
 * @Description:
 */
import type { RouteRecordRaw, RouteMeta } from 'vue-router'
import { defineComponent } from 'vue'

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string;
  meta?: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Recordable;
  fullPath?: string;
}
export type AppRouteModule = AppRouteRecordRaw;
