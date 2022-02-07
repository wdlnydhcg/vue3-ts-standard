<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-20 10:10:15
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-29 15:03:52
 * @Description: 
-->
<template>
  <perfect-scrollbar :class="prefixCls">
    <a-menu v-model:selectedKeys="activeKeys" mode="inline" theme="dark" @select="handleSelect">
      <SubMenu
        v-for="item in list"
        :menuItem="item"
        :key="`${item.path}-submenu`"
        :menuKey="item.path"
      />
    </a-menu>
  </perfect-scrollbar>
</template>
<script lang="ts">
  import { defineComponent, reactive, toRefs, unref, watch, getCurrentInstance } from "vue";
  import { useRouter } from "vue-router";
  import type { MenuState } from "@/components/SimpleMenu/types";
  import type { MenuInfo } from "ant-design-vue/es/menu/src/interface";
  import { useDesign } from "@/hooks/web/useDesign";
  import SubMenu from "./SimpleMenuItem.vue";
  import { useOpenKeys } from "./useOpenKeys";
  import { listenRouter } from "@/hooks/web/usePage";
  import { useMultipleTabStore } from "@/store/modules/multipleTab";

  const list = [
    { id: "id-home", name: "name-home", icon: "xxx", path: "/demo/index", children: [] },
    {
      id: "id-table",
      name: "name-table",
      icon: "yy",
      path: "/dashboard/index",
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

      watch(
        () => proxy.$route,
        (value) => {
          menuState.activeKeys = [value.path];
          console.log("watch ", value);
        },
        { immediate: true }
      );
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
