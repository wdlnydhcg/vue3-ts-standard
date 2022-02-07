<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-27 15:14:00
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-28 17:15:13
 * @Description: 
-->
<template>
  <component :is="linkType" v-bind="linkProps(to)">
    <slot />
  </component>
</template>
<script setup lang="ts">
  import { computed, getCurrentInstance } from "vue";
  import { isExternal } from "@/utils/validate";
  defineProps({
    to: {
      type: String,
      required: true,
    },
  });

  const { proxy }: any = getCurrentInstance();
  const isExternalValid = computed(() => {
    return isExternal(proxy.to);
  });
  const linkType = computed(() => {
    if (isExternalValid.value) {
      return "a";
    }
    return "router-link";
  });
  const linkProps = (to: string) => {
    if (isExternalValid.value) {
      return {
        href: to,
        target: "_blank",
        rel: "noopener",
      };
    }
    return {
      to: to,
    };
  };
</script>
<style lang="less" scoped></style>
