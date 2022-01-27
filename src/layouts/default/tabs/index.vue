<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-18 15:44:59
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-27 10:43:36
 * @Description: 
-->
<template>
  <div :class="prefixCls">
    <Tabs
      type="editable-card"
      size="small"
      :animated="false"
      :hideAdd="true"
      :tabBarGutter="3"
      v-model:activeKey="activeKey"
    >
      <TabPane :closable="true" v-for="i in 30" :key="i" :tab="`Tab-${i}`">
        <template #tab> Content of tab {{ i }} </template>
      </TabPane>
    </Tabs>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { Tabs } from "ant-design-vue";
  import { useDesign } from "@/hooks/web/useDesign";
  export default defineComponent({
    components: { Tabs, TabPane: Tabs.TabPane },
    setup() {
      const { prefixCls } = useDesign("multiple-tabs");
      const activeKey = ref("1");
      return { prefixCls, activeKey };
    },
  });
</script>
<style lang="less">
  @import "./index.less";
</style>
