<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-16 20:11:06
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-24 15:41:36
 * @Description: 
-->
<template>
  <Sider />
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Sider from "./LayoutSider.vue";
  export default defineComponent({
    name: "SiderWrapper",
    components: { Sider },
    setup() {
      return {};
    },
  });
</script>
