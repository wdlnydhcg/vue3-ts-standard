<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-15 14:28:03
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-18 14:54:24
 * @Description: 
-->
<template>
  <Layout :class="prefixCls">
    <!-- <LayoutFeatures /> -->
    <Layout :class="layoutClass">
      <LayoutSideBar />
      <Layout :class="`${prefixCls}-main`">
        <LayoutHeader />
        <LayoutContent />
        <!-- <LayoutMultipleHeader />
        <LayoutFooter /> -->
      </Layout>
    </Layout>
  </Layout>
</template>
<script lang="ts">
  import { defineComponent, computed } from "vue";
  import { Layout } from "ant-design-vue";

  import LayoutSideBar from "./sider/index.vue";
  import LayoutHeader from "./header/index.vue";
  import LayoutContent from "./content/index.vue";

  import { useDesign } from "@/hooks/web/useDesign";

  export default defineComponent({
    components: {
      Layout,
      LayoutSideBar,
      LayoutHeader,
      LayoutContent,
    },
    setup() {
      const { prefixCls } = useDesign("default-layout");
      const layoutClass = computed(() => {
        let cls: string[] = ["ant-layout", "ant-layout-has-sider"];
        return cls;
      });
      return {
        prefixCls,
        layoutClass,
      };
    },
  });
</script>
<style lang="less" scoped>
  @prefix-cls:~ '@{namespace}-default-layout';
  .@{prefix-cls} {
    display: flex;
    width: 100%;
    min-height: 100%;
    background-color: #fffccc;
    flex-direction: column;
  }
</style>
