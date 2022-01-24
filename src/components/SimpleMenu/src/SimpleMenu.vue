<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-20 10:10:15
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-24 14:57:03
 * @Description: 
-->
<template>
  <div>
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
  </div>
</template>
<script lang="ts">
  import { defineComponent, reactive, toRefs } from "vue";

  import SubMenu from "./SimpleMenuItem.vue";
  const list = [
    {
      id: "table",
      name: "table",
      icon: "yy",
      path: "/demo/table",
      children: [],
    },
    { id: "home", name: "home", icon: "xxx", path: "/demo/index", children: [] },
  ];
  export default defineComponent({
    components: {
      SubMenu,
    },
    setup() {
      const state = reactive({
        selectedKeys: [],
        openKeys: [],
      });
      const handleClick = (message: any) => {
        console.log("click ", message);
      };
      return {
        ...toRefs(state),
        list,
        handleClick,
      };
    },
  });
</script>
