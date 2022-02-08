<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-21 11:18:17
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-02-08 10:34:40
 * @Description: 
-->
<template>
  <template v-if="!hasChildren">
    <Link :to="menuItem.path">
      <a-menu-item :key="menuItem.path">{{ menuItem.name }}</a-menu-item>
    </Link>
  </template>
  <a-sub-menu :key="`${menuKey}-submenu`" v-else>
    <template #title>{{ menuItem.name }}</template>
    <SimpleMenuItem
      v-for="child in menuItem.children"
      :menuItem="child"
      :key="`${child.path}-simpleMenuItem`"
    />
  </a-sub-menu>
</template>
<script lang="ts" setup>
  import { computed, PropType } from "vue";
  import type { MenuItemType } from "../types";
  import Link from "./Link.vue";
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
