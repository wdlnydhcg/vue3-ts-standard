<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-21 11:18:17
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-25 10:30:05
 * @Description: 
-->
<template>
  <template v-if="!hasChildren">
    <a-menu-item :key="menuItem.id">{{ menuItem.name }}</a-menu-item>
  </template>
  <a-sub-menu :key="menuKey" v-else>
    <template #title>{{ menuItem.name }}</template>
    <SimpleMenuItem
      v-for="child in menuItem.children"
      :menuItem="child"
      :key="`${child.id}-simpleMenuItem`"
    />
  </a-sub-menu>
</template>
<script lang="ts" setup>
  import { computed, PropType } from "vue";
  import type { MenuItemType } from "../types";
  let props = defineProps({
    menuItem: {
      type: Object as PropType<MenuItemType>,
      default: () => ({}),
      require: true,
    },
    menuKey: {
      type: String as PropType<string>,
      default: () => "",
      require: true,
    },
  });
  const hasChildren = computed(() => {
    return (
      Reflect.has(props.menuItem, "children") &&
      props.menuItem.children &&
      props.menuItem.children.length > 0
    );
  });
</script>
