<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-15 14:28:03
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-02-07 17:13:12
 * @Description: 
-->
<template>
  <AppProvider>
    <RouterView />
  </AppProvider>
</template>
<script lang="ts" setup>
  import { AppProvider } from "@/components/Application";
</script>
<style>
  html,
  body {
    overflow-x: hidden;
  }
  #app {
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
