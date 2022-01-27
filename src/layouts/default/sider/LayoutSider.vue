<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-16 22:27:19
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-24 17:31:33
 * @Description: 
-->
<template>
  <div :class="getFoldClass"></div>
  <Sider :class="prefixCls" :collapsed="getCollapsed">
    <LayoutMenu />
  </Sider>
</template>
<script lang="ts">
  import { computed, defineComponent, unref } from "vue";
  import { Layout } from "ant-design-vue";
  import LayoutMenu from "../menu/index.vue";
  import { useDesign } from "@/hooks/web/useDesign";
  import { useMenuSetting } from "@/hooks/setting/useMenuSetting";
  export default defineComponent({
    name: "LayoutSider",
    components: { Sider: Layout.Sider, LayoutMenu },
    setup() {
      const { getCollapsed } = useMenuSetting();
      const { prefixCls } = useDesign("sider-wrap");
      // const unfold = prefixCls + "unfold";
      const getFoldClass = computed((): string => {
        return unref(getCollapsed) ? `${prefixCls}-fold` : `${prefixCls}-unfold`;
      });

      return {
        prefixCls,
        getFoldClass,
        getCollapsed,
      };
    },
  });
</script>
<style lang="less" scoped>
  @prefix-cls: ~"@{namespace}-sider-wrap";
  .@{prefix-cls} {
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;
    // z-index: 10;
    &-unfold {
      width: @menu-width;
    }
    &-fold {
      width: @menu-min-width;
    }
    :deep(.ant-layout-sider-children) {
      display: flex;
      flex-direction: column;
    }
  }
</style>
