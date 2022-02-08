<!--
 * @Author: MrAlenZhong
 * @Date: 2022-02-07 09:05:27
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-02-07 15:05:50
 * @Description: 
-->
<template>
  <Form>
    <Row>
      <template v-for="schema in getSchema" :key="schema.field"> </template>
    </Row>
  </Form>
</template>
<script lang="ts">
  import {
    defineComponent,
    nextTick,
    onMounted,
    reactive,
    ref,
    unref,
    watchEffect,
    computed,
    toRefs,
  } from "vue";
  import { Form, Row } from "ant-design-vue";
  import type { FormSchema } from "./types/form";
  export default defineComponent({
    name: "BasicForm",
    components: { Form, Row },
    setup(props) {
      const schemaRef = ref<Nullable<FormSchema[]>>(null);
      const getSchema = computed(() => {
        const schemas = unref(schemaRef);
        // for (const schema of schemas) {
        // }
      });
      return {
        getSchema,
      };
    },
  });
</script>
<style lang="less" scoped></style>
