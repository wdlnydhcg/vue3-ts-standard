<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-16 20:40:38
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-19 16:02:04
 * @Description: 
-->
<template>
  <div class="anticon" :class="getAppLogoClass">
    <img src="../../../assets/images/nahang.png" />
    <div :class="getAppTitleClass">资源管理中心</div>
  </div>
</template>
<script lang="ts" setup>
  import { computed } from "vue";
  import { useDesign } from "@/hooks/web/useDesign";
  const props = defineProps({
    theme: {
      type: String,
      default: "light",
    },
  });
  const { prefixCls } = useDesign("app-logo");
  console.log("props ", props);
  console.log("prefixCls ", prefixCls);
  const getAppLogoClass = computed(() => [prefixCls, props.theme]);
  const getAppTitleClass = computed(() => [`${prefixCls}__title`]);
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-app-logo";
  .@{prefix-cls} {
    display: flex;
    align-items: center;
    padding: 8px 4px 7px 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    &.light {
      background: @logo-color;
      color: @logo-font-color;
    }
    img {
      width: @logo-width;
      height: @logo-height;
    }
    &__title {
      margin-left: 5px;
      font-size: 16px;
      font-weight: bold;
    }
  }
</style>
