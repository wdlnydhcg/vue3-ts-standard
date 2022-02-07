<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-18 15:44:59
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-29 11:02:46
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
      :activeKey="activeKey"
      @change="handleChange"
    >
      <TabPane
        :closable="true"
        v-for="item in getTabList"
        :class="item.path"
        :key="item.path"
        :tab="item.name"
      >
        <!-- <template #tab> Content of tab {{ i }} </template> -->
      </TabPane>
    </Tabs>
  </div>
</template>
<script lang="ts" setup>
  import { computed, reactive, ref, watch } from "vue";
  import { Tabs } from "ant-design-vue";
  import { useDesign } from "@/hooks/web/useDesign";
  import { useMultipleTabStore } from "@/store/modules/multipleTab";
  import { useRouter } from "vue-router";
  const { resolve } = useRouter();
  const { TabPane } = Tabs;
  const { prefixCls } = useDesign("multiple-tabs");

  let tabStore = useMultipleTabStore();

  const getTabList = computed(() => {
    return tabStore.getTabList;
  });
  const activeKey = computed(() => {
    return tabStore.getActiveTab?.path;
  });

  const handleChange = (key: any) => {
    tabStore.setActiveTab(resolve(key));
  };
</script>
<style lang="less">
  @import "./index.less";
</style>
