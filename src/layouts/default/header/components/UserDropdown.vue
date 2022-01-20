<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-18 16:10:42
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-20 09:48:11
 * @Description: 
-->
<template>
  <!-- <img src="https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640" alt="" /> -->
  <Dropdown :overlayClassName="`${prefixCls}-dropdown-overlay`">
    <span :class="prefixCls">
      <img :class="`${prefixCls}__header`" src="https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640" />
      <span :class="`${prefixCls}__header_username`">管理员</span>
    </span>
    <template #overlay>
      <Menu>
        <MenuItem />
      </Menu>
    </template>
  </Dropdown>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import { Dropdown, Menu } from "ant-design-vue";
  import { useDesign } from "@/hooks/web/useDesign";
  import { createAsyncComponent } from "@/utils/factory/createAsyncComponent";
  export default defineComponent({
    components: {
      Dropdown,
      Menu,
      MenuItem: createAsyncComponent(() => import("./DropMenuItem.vue")),
    },
    setup() {
      const { prefixCls } = useDesign("user-dropdown");
      return {
        prefixCls,
      };
    },
  });
</script>
<style lang="less" scoped>
  @prefix-cls:~ '@{namespace}-user-dropdown';
  .@{prefix-cls} {
    height: 48px;
    line-height: 48px;
    display: block;
    cursor: pointer;
    &__header {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin-right: 5px;
    }
    &__header_username {
      margin-right: 15px;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }
  }
</style>
