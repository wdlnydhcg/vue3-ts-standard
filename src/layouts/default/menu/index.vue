<!--
 * @Author: MrAlenZhong
 * @Date: 2022-01-16 22:17:41
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2022-01-24 15:42:33
 * @Description: 
-->
<script lang="tsx">
  import { defineComponent } from "vue";
  import { AppLogo } from "@/components/Application";
  import { SimpleMenu } from "@/components/SimpleMenu";
  export default defineComponent({
    name: "LayoutMenu",
    // props: {},
    setup() {
      function renderHeader() {
        return <AppLogo />;
      }
      function renderMenu() {
        return <SimpleMenu />;
      }
      // function renderMenu() {}
      return () => {
        return (
          <>
            {renderHeader()}
            {renderMenu()}
          </>
        );
      };
    },
  });
</script>
