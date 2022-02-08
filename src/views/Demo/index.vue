<template>
  <!-- <BasicTable @register="registerTable"></BasicTable> -->
  <div class="searchWrap">
    <a-form
      ref="formRef"
      name="advanced_search"
      class="ant-advanced-search-form"
      :model="formState"
      @finish="onFinish"
    >
      <a-row :gutter="24">
        <template v-for="i in 10" :key="i">
          <a-col v-show="expand || i <= 6" :span="8">
            <a-form-item
              :name="`field-${i}`"
              :label="`field-${i}`"
              :rules="[{ required: true, message: 'input something' }]"
            >
              <a-input placeholder="placeholder"></a-input>
            </a-form-item>
          </a-col>
        </template>
      </a-row>
      <a-row>
        <a-col :span="24" style="text-align: right">
          <a-button type="primary" html-type="submit">Search</a-button>
          <!-- <a-button style="margin: 0 8px" @click="() => formRef.resetFields()">Clear</a-button> -->
          <a style="font-size: 12px" @click="expand = !expand">
            <template v-if="expand">
              <UpOutlined />
            </template>
            <template v-else>
              <DownOutlined />
            </template>
            Collapse
          </a>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive } from "vue";
  import { DownOutlined, UpOutlined } from "@ant-design/icons-vue";
  import type { FormInstance } from "ant-design-vue";
  import { BasicTable } from "@/components/Table";
  export default defineComponent({
    name: "index",
    components: { BasicTable, DownOutlined, UpOutlined },
    setup(props) {
      const expand = ref(false);
      const formRef = ref<FormInstance>();
      const formState = reactive({});
      const onFinish = (values: any) => {
        console.log("Received values of form: ", values);
        console.log("formState: ", formState);
      };
      return {
        formRef,
        formState,
        expand,
        onFinish,
      };
    },
  });
</script>
<style lang="less" scoped>
  .searchWrap {
    background: white;
    padding: 12px 10px 6px;
    border-radius: 2px;
    margin-bottom: 16px;
  }
</style>
