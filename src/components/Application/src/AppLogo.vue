<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-16 20:40:38
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-22 15:34:54
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
  import { useMenuSetting } from "@/hooks/setting/useMenuSetting";
  const { getCollapsed } = useMenuSetting();
  const props = defineProps({
    theme: {
      type: String,
      default: "light",
    },
  });
  const { prefixCls } = useDesign("app-logo");
  console.log("getCollapsed ", getCollapsed);
  const getAppLogoClass = computed(() => [prefixCls, props.theme]);
  const getAppTitleClass = computed(() => [
    `${prefixCls}__title`,
    `title_${!getCollapsed.value ? "show" : "hide"}`,
  ]);
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
      transition: all 0.5s;
      &.title_show {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &.title_hide {
        display: none;
      }
    }
  }
</style>
