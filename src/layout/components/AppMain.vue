<template>
  <div class="wrap">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class extends Vue {}
</script>

<style scoped lang="less">
.wrap {
  background-color: @darkGray;
}
</style>
