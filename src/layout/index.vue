<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header">
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script lang="ts">
import Component, { mixins } from "vue-class-component";
import ResizeMixin from "./mixin/resize";

import AppMain from "./components/AppMain.vue";
import Sidebar from "./components/Sidebar/index.vue";
import Navbar from "@/layout/components/Navbar/index.vue";

@Component({
  name: "Layout",
  components: {
    AppMain,
    Sidebar,
    Navbar,
  },
})
export default class extends mixins(ResizeMixin) {}
</script>

<style scoped lang="less">
.app-wrapper {
  background-color: @darkGray;
  /*侧边栏*/
  .sidebar-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: @sideBarWidth;
    height: 100%;
    z-index: 1001;
    overflow: hidden;
  }
  .main-container {
    margin-left: @sideBarWidth;
    position: relative;

    .fixed-header {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 9;
      width: calc(100% - @sideBarWidth);
    }
  }
}
</style>
