<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-16 20:23:41
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-21 15:17:01
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
          <MenuUnfoldOutlined v-if="collapsed" />
          <MenuFoldOutlined v-else />
        </a-button>
        <!-- page tabs -->
        <MultipleTabs />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, computed, CSSProperties, reactive, toRefs } from "vue";
  import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    // PieChartOutlined,
    // MailOutlined,
  } from "@ant-design/icons-vue";
  import MultipleTabs from "../tabs/index.vue";
  import UserDropdown from "./components/UserDropdown.vue";

  import { useDesign } from "@/hooks/web/useDesign";

  const HEADER_HEIGHT = 48;

  export default defineComponent({
    components: {
      MultipleTabs,
      UserDropdown,
      MenuFoldOutlined,
      MenuUnfoldOutlined,
      // PieChartOutlined,
      // MailOutlined,
    },
    setup() {
      const state = reactive({
        collapsed: false,
        selectedKeys: ["1"],
        openKeys: ["sub1"],
        preOpenKeys: ["sub1"],
      });
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
          width: `calc(100% - 200px)`,
        };
      });
      const toggleCollapsed = () => {
        state.collapsed = !state.collapsed;
        state.openKeys = state.collapsed ? [] : state.preOpenKeys;
        console.log("state ", JSON.stringify(state));
      };
      return {
        ...toRefs(state),
        prefixCls,
        getClass,
        getHeaderHeightStyle,
        getHeaderWidthStyle,
        toggleCollapsed,
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
