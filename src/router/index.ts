// /*
//  * @Author: MrAlenZhong
//  * @Date: 2022-01-13 16:43:46
//  * @LastEditors: MrAlenZhong
//  * @LastEditTime: 2022-01-14 08:40:22
//  * @Description:
//  */
// import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// // const modules = import.meta.globEager('./modules/**/*.ts');
// // const modules = require.context('./modules', false, /\.ts$/)

// // Object.keys(modules).forEach((key) => {
// //   const mod = modules[key].default || {};
// //   const modList = Array.isArray(mod) ? [...mod] : [mod];
// //   routeModuleList.push(...modList);
// // });
// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// export default router
import type { RouteRecordRaw } from 'vue-router'
// import type { App } from 'vue';

import { createRouter, createWebHistory } from 'vue-router'
import { basicRoutes } from './routes'

// app router
export const router = createRouter({
  history: createWebHistory('/'),
  routes: basicRoutes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})
