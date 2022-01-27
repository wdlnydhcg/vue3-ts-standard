<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-16 16:06:32
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-17 16:07:39
 * @Description: 
-->
<script lang="ts">
  import { defineComponent, toRefs, ref } from "vue";
  import { prefixCls } from "@/settings/designSetting";
  import { createAppProviderContext } from "./useAppContext";
  const props = {
    /**
     * class style prefix
     */
    prefixCls: { type: String, default: prefixCls },
  };
  export default defineComponent({
    name: "AppProvider",
    inheritAttrs: false,
    props,
    setup(props, { slots }) {
      const { prefixCls } = toRefs(props);
      const isMobile = ref(false);
      createAppProviderContext({ prefixCls, isMobile });
      return () => slots.default?.();
    },
  });
</script>
