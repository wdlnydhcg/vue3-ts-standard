<!--
 * @Author: MrAlenZhong
 * @Date: 2022-02-07 09:01:04
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-02-07 10:08:14
 * @Description: 
-->
<template>
  <div ref="wrapRef">
    <BasicForm ref="formRef"></BasicForm>
    <Table ref="tableElRef"></Table>
  </div>
</template>
<script lang="ts">
  import {
    defineComponent,
    nextTick,
    onMounted,
    reactive,
    ref,
    watchEffect,
    computed,
    toRefs,
  } from "vue";
  import { Table } from "ant-design-vue";
  import { BasicForm } from "@/components/Form/index";
  export default defineComponent({
    name: "BasicTable",
    components: {
      Table,
      BasicForm,
    },
    setup(props) {
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
<style lang="less" scoped></style>
