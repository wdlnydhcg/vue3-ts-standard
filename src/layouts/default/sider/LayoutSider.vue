<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-16 22:27:19
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-24 09:43:35
 * @Description: 
-->
<template>
  <Sider :collapsed="getCollapsed">
    <LayoutMenu />
  </Sider>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import { Layout } from "ant-design-vue";
  import LayoutMenu from "../menu/index.vue";
  import { useMenuSetting } from "@/hooks/setting/useMenuSetting";
  export default defineComponent({
    name: "LayoutSider",
    components: { Sider: Layout.Sider, LayoutMenu },
    setup() {
      const { getCollapsed } = useMenuSetting();
      return {
        getCollapsed,
      };
    },
  });
</script>
