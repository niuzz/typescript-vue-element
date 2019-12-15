<template>
  <div></div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import echarts from "echarts";
@Component({
  name: "bar-chart",
})
export default class extends Vue {
  @Prop({ default: "chart"}) private className!: string;
  @Prop({ default: "100%"}) private width!: string;
  @Prop({ default: "300px"}) private height!: string;

  private chart =
  private initChart() {
    this.chart
  }
}
</script>
<style lang="less"></style>
