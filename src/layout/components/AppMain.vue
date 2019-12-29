<template>
  <div class="app-main">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class extends Vue {}
</script>

<style scoped lang="less">
.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header + .app-main {
  padding-top: 50px;
  overflow: auto;
}
</style>
