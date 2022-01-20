<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-19 17:15:21
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-20 08:59:50
 * @Description: 
-->
<template>
  <MenuItem>
    <span class="flex items-center icons-list">
      <!-- <Icon icon="export-outlined" class="mr-1" /> -->
      <ExportOutlined />
      <span>退出登录</span>
    </span>
  </MenuItem>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import { Menu } from "ant-design-vue";
  import { ExportOutlined } from "@ant-design/icons-vue";

  export default defineComponent({
    name: "DropMenuItem",
    components: { MenuItem: Menu.Item, ExportOutlined },
    setup() {
      return {};
    },
  });
</script>
<style lang="less" scoped>
  .icons-list :deep(.anticon) {
    margin-right: 6px;
    font-size: 16px;
  }
</style>
