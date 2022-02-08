<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-16 20:23:41
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-02-08 11:01:50
 * @Description: 
-->
<template>
  <div :class="[prefixCls]">
    <RouterView v-slot="{ Component, route }">
      <!-- <template #default="{ Component, route }"> -->
      <!-- <transition name="fade-transform" mode="out-in" appear> -->
      <keep-alive>
        <component :is="Component" :key="route.path" />
      </keep-alive>
      <!-- </transition> -->
      <!-- </template> -->
    </RouterView>
  </div>
</template>
<script setup lang="ts">
  import { defineComponent } from "vue";
  import { useDesign } from "@/hooks/web/useDesign";

  const { prefixCls } = useDesign("layout-content");
</script>

<style lang="less" scoped>
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
  /* fade-transform AppMain*/
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all 0.38s;
  }

  .fade-transform-enter-from {
    opacity: 0;
    // position: absolute;
    transform: translateX(-30px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    // position: absolute;
    transform: translateX(30px);
  }
  .fade-transform-active {
    position: absolute;
  }
</style>
