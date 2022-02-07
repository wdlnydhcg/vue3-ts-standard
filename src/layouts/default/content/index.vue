<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-16 20:23:41
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-28 10:27:56
 * @Description: 
-->
<template>
  <div :class="[prefixCls]">
    <RouterView>
      <template #default="{ Component, route }">
        <transition name="fade-transform" mode="out-in" appear>
          <keep-alive>
            <Component :is="Component" :key="route.fullPath" />
          </keep-alive>
        </transition>
      </template>
    </RouterView>
  </div>
  <!-- <div > this is content index page </div> -->
</template>
<script setup lang="ts">
  import { defineComponent } from "vue";
  import { useDesign } from "@/hooks/web/useDesign";

  const { prefixCls } = useDesign("layout-content");
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
<style lang="less" scoped>
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
