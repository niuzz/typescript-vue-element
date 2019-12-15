<template>
  <div class="dashboard-container">
    <h3 class="page-title">~ dashboard</h3>
    <panel-group @handleSetLineChartData="handleSetLineChartData" />
    <el-row class="line-chart-wrap">
      <line-chart :chart-data="lineChartData" />
    </el-row>
    <el-row :gutter="30">
      <el-col :sm="24" :xs="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <radar-chart />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PanelGroup from "./components/PanelGroup.vue";
import LineChart, { ILineChartData } from "./components/LineChart.vue";
import PieChart from "./components/PieChart.vue";
import RadarChart from "./components/RadarChart.vue";

const lineChartData: { [type: string]: ILineChartData } = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145],
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130],
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130],
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130],
  },
};

@Component({
  name: "dashboard",
  components: {
    PanelGroup,
    LineChart,
    PieChart,
    RadarChart,
  },
})
export default class extends Vue {
  private lineChartData = lineChartData.newVisitis;

  private handleSetLineChartData(type: string) {
    this.lineChartData = lineChartData[type];
  }
}
</script>
<style lang="less">
.page-title {
  margin-bottom: 20px;
  font-size: 26px;
  font-weight: bold;
  color: #ffb600;
}

.dashboard-container {
  padding: 32px;
  position: relative;

  .line-chart-wrap {
    padding: 20px;
    background-color: @lightGray;
  }

  .chart-wrapper {
    margin: 32px 0 0;
    padding: 20px 0;
    background-color: @lightGray;
  }
}
</style>
