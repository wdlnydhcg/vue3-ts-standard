<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-16 20:23:41
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-18 15:18:59
 * @Description: 
-->
<template>
  <div :class="[prefixCls]"> this is content index page </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import { useDesign } from "@/hooks/web/useDesign";
  export default defineComponent({
    components: {},
    setup() {
      const { prefixCls } = useDesign("layout-content");
      return {
        prefixCls,
      };
    },
  });
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-layout-content";
  .@{prefix-cls} {
    position: relative;
    flex: 1 1 auto;
    min-height: 0;

    &.fixed {
      width: 1200px;
      margin: 0 auto;
    }

    &-loading {
      position: absolute;
      top: 200px;
      // z-index: @page-loading-z-index;
    }
  }
</style>
