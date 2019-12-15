<template>
  <div
    :class="className"
    :style="{height:height, width: width}"
  />
</template>
<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import echarts, { EChartOption } from "echarts";

export interface ILineChartData {
  expectedData: number[];
  actualData: number[];
}

@Component
export default class extends Vue {
  @Prop({ required: true }) private chartData!: ILineChartData;
  @Prop({ default: "chart" }) private className!: string;
  @Prop({ default: "100%" }) private width!: string;
  @Prop({ default: "350px" }) private height!: string;
  private chart!: echarts.ECharts;

  private initChart() {
    this.chart = echarts.init(this.$el as HTMLDivElement, "macarons");
    this.setOptions(this.chartData);
  }

  @Watch("chartData", { deep: true })
  private onChartDataChange(value: ILineChartData) {
    this.setOptions(value);
  }

  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  }

  private setOptions(chartData: ILineChartData) {
    if (this.chart) {
      this.chart.setOption({
        xAxis: {
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          boundaryGap: false,
          axisTick: {
            show: false,
          },
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
          padding: 8,
        },
        yAxis: {
          axisTick: {
            show: false,
          },
        },
        legend: {
          data: ["expected", "actual"],
        },
        series: [
          {
            name: "expected",
            itemStyle: {
              color: "#FF005A",
              lineStyle: {
                color: "#FF005A",
                width: 2,
              },
            },
            smooth: true,
            type: "line",
            data: chartData.expectedData,
            animationDuration: 2800,
            animationEasing: "cubicInOut",
          },
          {
            name: "actual",
            smooth: true,
            type: "line",
            itemStyle: {
              color: "#3888fa",
              lineStyle: {
                color: "#3888fa",
                width: 2,
              },
              areaStyle: {
                color: "#f3f8ff",
              },
            },
            data: chartData.actualData,
            animationDuration: 2800,
            animationEasing: "quadraticOut",
          }],
      } as EChartOption<EChartOption.SeriesLine>);
    }
  }
}
</script>