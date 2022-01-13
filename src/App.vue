<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-13 15:30:21
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-13 15:41:53
 * @Description: 
-->
<template>
  <h1>vue3+ts标准模版</h1>
  <ul>
    <li>开箱即用</li>
    <li>typescript</li>
    <li>Vue3</li>
    <li>支持 tsx</li>
    <li>eslint</li>
    <li>简单易用可扩展</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
