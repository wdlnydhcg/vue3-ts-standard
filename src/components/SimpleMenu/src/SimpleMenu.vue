<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-20 10:10:15
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-22 15:00:37
 * @Description: 
-->
<template>
  <div>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
    >
      <SubMenu v-for="item in list" :menuItem="item" :key="item.id" />
    </a-menu>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from "vue";
  import SubMenu from "./SimpleMenuItem.vue";
  const list = [
    { id: "1", name: "1", icon: "", path: "", children: [] },
    {
      id: "2",
      name: "2",
      icon: "",
      path: "",
      children: [
        {
          id: "2-2",
          name: "2-2",
          icon: "",
          path: "",
          children: [{ id: "2-2-1", name: "2-2-1", icon: "", path: "", children: [] }],
        },
      ],
    },
  ];
  export default defineComponent({
    components: {
      SubMenu,
    },
    setup() {
      return {
        list,
        selectedKeys: ref(["1"]),
        openKeys: ref(["2"]),
      };
    },
  });
</script>
