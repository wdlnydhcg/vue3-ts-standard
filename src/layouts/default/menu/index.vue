<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-16 22:17:41
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-17 17:20:27
 * @Description: 
-->
<script lang="tsx">
  import { defineComponent } from "vue";
  import { AppLogo } from "@/components/Application";
  export default defineComponent({
    name: "LayoutMenu",
    // props: {},
    setup() {
      function renderHeader() {
        return <AppLogo />;
      }
      return () => {
        return (
          <>
            <h2>this is menu page</h2>
            {renderHeader()}
          </>
        );
      };
    },
  });
</script>
