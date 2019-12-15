<template>
  <div class="line-chart-container"></div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "line-chart",
})
export default class LineChart extends Vue{
private name = "line-chart";
}
</script>
<style lang="less">
.line-chart-container {
  background-color: @lightGray;
}
</style>
