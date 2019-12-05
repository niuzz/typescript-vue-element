<template>
  <div class="wrap">
    <app-main />
  </div>
</template>

<script lang="ts">
import Component, { mixins } from "vue-class-component";
import ResizeMixin from "./mixin/resize";

import AppMain from "./components/AppMain.vue";

@Component({
  name: "Layout",
  components: {
    AppMain,
  },
})
export default class extends mixins(ResizeMixin) {}
</script>

<style scoped lang="less"></style>
