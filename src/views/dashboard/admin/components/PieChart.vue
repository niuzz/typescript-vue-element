<template>
  <div
    class="chart-element"
    :class="className"
  >
  </div>

</template>
<script lang="ts">
import echarts, { EChartOption } from "echarts";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "pie-chart",
})
export default class extends Vue {
  @Prop({ default: "chart" }) private className!: string;
  @Prop({ default: "100%" }) private width!: string;
  @Prop({ default: "300px" }) private height!: string;
  private chart!: echarts.ECharts;

  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  }

  private initChart() {
    this.chart = echarts.init(this.$el as HTMLDivElement, "macarons");
    this.chart.setOption({
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        left: "center",
        bottom: "10",
        data: ["Industries", "Technology", "Forex", "Gold", "Forecasts"],
      },
      series: [
        {
          name: "WEEKLY WRITE ARTICLES",
          type: "pie",
          roseType: "radius",
          radius: [15, 95],
          center: ["50%", "38%"],
          data: [
            { value: 320, name: "Industries" },
            { value: 240, name: "Technology" },
            { value: 149, name: "Forex" },
            { value: 100, name: "Gold" },
            { value: 59, name: "Forecasts" },
          ],
          animationEasing: "cubicInOut",
          animationDuration: 2600,
        },
      ],
    } as EChartOption<EChartOption.SeriesPie>);
  }
}
</script>
<style lang="less">
.chart-element {
  width: 100%;
  height: 300px;
}
</style>