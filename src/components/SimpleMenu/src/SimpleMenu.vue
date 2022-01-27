<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-20 10:10:15
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-27 10:49:42
 * @Description: 
-->
<template>
  <perfect-scrollbar :class="prefixCls">
    aaa333eeeaaa

    <a-menu v-model:selectedKeys="activeKeys" mode="inline" theme="dark" @select="handleSelect">
      <SubMenu
        v-for="item in list"
        :menuItem="item"
        :key="`${item.id}-submenu`"
        :menuKey="item.id"
      />
    </a-menu>
  </perfect-scrollbar>
</template>
<script lang="ts">
  import { defineComponent, reactive, toRefs, unref } from "vue";
  import type { MenuState } from "@/components/SimpleMenu/types";
  import type { MenuInfo } from "ant-design-vue/es/menu/src/interface";
  import { useDesign } from "@/hooks/web/useDesign";
  import SubMenu from "./SimpleMenuItem.vue";
  const list = [
    { id: "id-home", name: "name-home", icon: "xxx", path: "/demo/index", children: [] },
    {
      id: "id-table",
      name: "name-table",
      icon: "yy",
      path: "/demo/table",
      children: [],
    },
    {
      id: "id-home22",
      name: "name-home22",
      icon: "xxx",
      path: "/demo/index",
      children: [
        {
          id: "id-home333",
          name: "name-home333",
          icon: "xxx",
          path: "/demo/index",
          children: [],
        },
      ],
    },
    {
      id: "id-home444",
      name: "name-home5555",
      icon: "xxx",
      path: "/demo/index11",
      children: [
        {
          id: "id-home666",
          name: "name-home777",
          icon: "xxx",
          path: "/demo/index",
          children: [],
        },
      ],
    },
  ];
  export default defineComponent({
    components: {
      SubMenu,
    },
    setup() {
      const menuState = reactive<MenuState>({
        activeKeys: [],
        activeSubMenuNames: [],
      });
      const { prefixCls } = useDesign("simple-menu");

      const handleSelect = (menuitem: MenuInfo) => {
        menuState.activeKeys = [unref(String(menuitem.key))];
        console.log("menuState.activeKeys 11122", menuState.activeKeys);
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
