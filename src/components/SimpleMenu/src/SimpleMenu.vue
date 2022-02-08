<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-20 10:10:15
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-02-08 11:16:38
 * @Description: 
-->
<template>
  <perfect-scrollbar :class="prefixCls">
    <a-menu v-model:selectedKeys="activeKeys" mode="inline" theme="dark" @select="handleSelect">
      <SubMenu
        v-for="item in list"
        :menuItem="item"
        :key="`${item.path}-submenu-item`"
        :menuKey="item.path"
      />
    </a-menu>
  </perfect-scrollbar>
</template>
<script lang="ts">
  import {
    defineComponent,
    reactive,
    toRefs,
    unref,
    watch,
    computed,
    getCurrentInstance,
    watchEffect,
  } from "vue";
  import { useRouter } from "vue-router";
  import type { MenuState } from "@/components/SimpleMenu/types";
  import type { MenuInfo } from "ant-design-vue/es/menu/src/interface";
  import { useDesign } from "@/hooks/web/useDesign";
  import SubMenu from "./SimpleMenuItem.vue";
  import { useOpenKeys } from "./useOpenKeys";
  import { listenRouter } from "@/hooks/web/usePage";
  import { useMultipleTabStore } from "@/store/modules/multipleTab";
  import { router } from "@/router";
  const list = [
    { id: "id-home", name: "name-home", icon: "xxx", path: "/demo/index", children: [] },
    {
      id: "id-table",
      name: "name-table",
      icon: "yy",
      path: "/dashboard/index",
      children: [],
    },
    {
      id: "id-table2",
      name: "name-table2",
      icon: "xx",
      path: "/demo/index2",
      children: [],
    },
    {
      id: "id-table3",
      name: "name-table3",
      icon: "xx",
      path: "/demo/index3",
      children: [],
    },
    {
      id: "id-table4",
      name: "name-table4",
      icon: "xx",
      path: "/demo/index4",
      children: [],
    },
  ];
  const { setOpenKeys } = useOpenKeys();
  export default defineComponent({
    components: {
      SubMenu,
    },
    setup() {
      const { currentRoute, resolve } = useRouter();
      let { getCurrentPath } = listenRouter();
      console.log("getCurrentPath ", getCurrentPath());
      const tabStore = useMultipleTabStore();
      const menuState = reactive<MenuState>({
        activeKeys: [getCurrentPath()],
        activeSubMenuNames: [],
      });
      const { proxy }: any = getCurrentInstance();
      // computed(() => {
      //   const { path } = proxy.$route;
      //   const { activeKeys } = menuState;
      //   console.log("activeKeys[0] ", activeKeys[0]);
      //   console.log("path", path);

      //   if (path !== activeKeys[0]) {
      //     menuState.activeKeys = [path];
      //   }
      //   router.push(proxy.$route.path);
      // });
      watchEffect(() => {
        menuState.activeKeys = [proxy.$route.path];
        // router.push(proxy.$route.path);
      });
      const { prefixCls } = useDesign("simple-menu");
      const handleSelect = (menuitem: any) => {
        tabStore.addTab(resolve(menuitem.key));
      };

      return {
        ...toRefs(menuState),
        prefixCls,
        list,
        handleSelect,
      };
    },
  });
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-simple-menu";
  .@{prefix-cls} {
    flex: 1 1 0%;
    overflow: hidden auto;
  }
</style>
