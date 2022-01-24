<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-16 20:23:41
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-24 08:43:30
 * @Description: 
-->
<template>
  <div class="mth" :style="getHeaderHeightStyle"></div>
  <div :class="getClass" :style="[getHeaderHeightStyle, getHeaderWidthStyle]">
    <div :style="[getHeaderHeightStyle, { position: 'relative' }]">
      <div :class="`${prefixCls}-right`" style="">
        <!-- platform info -->
        <UserDropdown />
      </div>
      <div :class="`${prefixCls}-left`">
        <a-button
          type="primary"
          :class="`${prefixCls}-left-collapsed-btn`"
          @click="toggleCollapsed"
        >
          <MenuFoldOutlined v-if="!getCollapsed" />
          <MenuUnfoldOutlined v-else />
        </a-button>
        <!-- page tabs -->
        <MultipleTabs />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, computed, CSSProperties } from "vue";
  import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
  import MultipleTabs from "../tabs/index.vue";
  import UserDropdown from "./components/UserDropdown.vue";
  import { useMenuSetting } from "@/hooks/setting/useMenuSetting";
  import { useDesign } from "@/hooks/web/useDesign";

  const HEADER_HEIGHT = 48;

  export default defineComponent({
    components: {
      MultipleTabs,
      UserDropdown,
      MenuFoldOutlined,
      MenuUnfoldOutlined,
    },
    setup() {
      const { toggleCollapsed, getCollapsed } = useMenuSetting();
      const { prefixCls } = useDesign("layout-multiple-header");
      const getClass = computed(() => {
        return [prefixCls, `${prefixCls}--fixed`];
      });
      const getHeaderHeightStyle = computed((): CSSProperties => {
        return {
          height: `${HEADER_HEIGHT}px`,
        };
      });
      const getHeaderWidthStyle = computed((): CSSProperties => {
        return {
          width: `${getCollapsed.value ? "calc(100% - 80px)" : "calc(100% - 200px)"}`,
        };
      });

      return {
        prefixCls,
        getClass,
        getHeaderHeightStyle,
        getHeaderWidthStyle,
        toggleCollapsed,
        getCollapsed,
      };
    },
  });
</script>
<style lang="less" scoped>
  @prefix-cls:~ '@{namespace}-layout-multiple-header';
  .@{prefix-cls} {
    transition: width 0.2s;
    flex: 0 0 auto;
    background: @header-bg-color;
    flex-direction: column;
    &--fixed {
      position: fixed;
      top: 0;
      // z-index: @multiple-tab-fixed-z-index;
      width: 100%;
    }
    &-left {
      // display: inline-flex;
      position: relative;
      height: 100%;
      overflow: hidden;
      &-collapsed-btn {
        float: left;
        width: 40px;
        padding: 0;
        height: 100%;
        line-height: 48px;
        cursor: pointer;
        background: @header-bg-color;
        border-color: @header-bg-color;
        box-shadow: none;
        &:hover {
          background: @header-wrap-hover-color;
        }
      }
    }
    &-right {
      // display: inline-flex;
      float: right;
      line-height: 48px;
    }
  }
</style>
