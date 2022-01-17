<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-16 22:27:19
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-17 17:14:46
 * @Description: 
-->
<template>
  <Sider>
    <LayoutMenu />
  </Sider>
</template>
<script lang="ts">
  import {
    defineComponent,
    // nextTick,
    // onMounted,
    // reactive,
    // ref,
    // watchEffect,
    // computed,
    // toRefs,
  } from "vue";
  import { Layout } from "ant-design-vue";
  import LayoutMenu from "../menu/index.vue";
  export default defineComponent({
    name: "LayoutSider",
    components: { Sider: Layout.Sider, LayoutMenu },
    setup() {
      // 页面初始化时调用
      // nextTick(() => {})
      // 组件挂载
      // onMounted(() => {})
      //定义data,定义computed
      //const state = reactive({
      //text: '',
      //lowerCaseUsername: computed(() => state.username.toLowerCase())
      //})
      //获取组件
      //const refObj = ref()
      //定义函数
      // const testFunc = () => {}
      //定义监听器watch
      //watch(xx, (newValue, oldValue) => {});
      //定义监听器watchEffect
      //watchEffect(() => {})
      return {
        //...toRefs(state),
        //refObj,
        //testFunc
      };
    },
  });
</script>
