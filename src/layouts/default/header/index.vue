<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-16 20:23:41
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-18 20:13:06
 * @Description: 
-->
<template>
  <div class="mth" :style="getHeaderHeightStyle"></div>
  <div :class="getClass" :style="[getHeaderHeightStyle, getHeaderWidthStyle]">
    <div :style="[getHeaderHeightStyle, { position: 'relative' }]">
      <div :class="`${prefixCls}-right`" style="">
        <!-- platform info -->
        <UserDropdown />
      </div>
      <div :class="`${prefixCls}-left`">
        <!-- page tabs -->
        <MultipleTabs />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, computed, CSSProperties } from "vue";

  import MultipleTabs from "../tabs/index.vue";
  import UserDropdown from "./components/UserDropdown.vue";

  import { useDesign } from "@/hooks/web/useDesign";

  const HEADER_HEIGHT = 48;

  export default defineComponent({
    components: { MultipleTabs, UserDropdown },
    setup() {
      const { prefixCls } = useDesign("layout-multiple-header");
      const getClass = computed(() => {
        return [prefixCls, `${prefixCls}--fixed`];
      });
      const getHeaderHeightStyle = computed((): CSSProperties => {
        return {
          height: `${HEADER_HEIGHT}px`,
        };
      });
      const getHeaderWidthStyle = computed((): CSSProperties => {
        return {
          width: `calc(100% - 200px)`,
        };
      });
      return { prefixCls, getClass, getHeaderHeightStyle, getHeaderWidthStyle };
    },
  });
</script>
<style lang="less" scoped>
  @prefix-cls:~ '@{namespace}-layout-multiple-header';
  .@{prefix-cls} {
    transition: width 0.2s;
    flex: 0 0 auto;
    background: @header-bg-color;
    flex-direction: column;
    &--fixed {
      position: fixed;
      top: 0;
      // z-index: @multiple-tab-fixed-z-index;
      width: 100%;
    }
    &-left {
      // display: inline-flex;
      position: relative;
      height: 100%;
      overflow: hidden;
    }
    &-right {
      // display: inline-flex;
      float: right;
      line-height: 48px;
    }
  }
</style>
