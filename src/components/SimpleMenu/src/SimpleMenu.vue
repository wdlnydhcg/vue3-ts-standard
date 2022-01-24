<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-20 10:10:15
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-24 17:27:21
 * @Description: 
-->
<template>
  <!-- <div :> -->
  <perfect-scrollbar :class="prefixCls">
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      @click="handleClick"
    >
      <SubMenu
        v-for="item in list"
        :menuItem="item"
        :key="`${item.id}-submenu`"
        :menuKey="item.id"
      />
    </a-menu>
  </perfect-scrollbar>
  <!-- </div> -->
</template>
<script lang="ts">
  import { defineComponent, reactive, toRefs } from "vue";
  import { useDesign } from "@/hooks/web/useDesign";
  import SubMenu from "./SimpleMenuItem.vue";
  const list = [
    { id: "home", name: "home", icon: "xxx", path: "/demo/index", children: [] },
    {
      id: "table",
      name: "table",
      icon: "yy",
      path: "/demo/table",
      children: [],
    },
    { id: "home1", name: "home111", icon: "xxx", path: "/demo/index", children: [] },
  ];
  export default defineComponent({
    components: {
      SubMenu,
    },
    setup() {
      const { prefixCls } = useDesign("simple-menu");
      const state = reactive({
        selectedKeys: [],
        openKeys: [],
      });
      const handleClick = (message: any) => {
        console.log("click ", message);
      };
      return {
        ...toRefs(state),
        prefixCls,
        list,
        handleClick,
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
