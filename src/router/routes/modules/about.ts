/*
 * @Author: MrAlenZhong
 * @Date: 2022-01-13 20:29:16
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-14 20:46:02
 * @Description:
 */
import type { AppRouteModule } from '@/router/types'
import { LAYOUT } from '@/router/constant'
const dashboard: AppRouteModule = {
  path: '/about',
  name: 'About',
  component: LAYOUT,
  redirect: '/about/index',
  children: [
    {
      path: 'index',
      name: 'AboutPage',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        title: '关于',
        icon: 'simple-icons:about-dot-me',
        hideMenu: true
      }
    }
  ]
}
export default dashboard
