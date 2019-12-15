<template>
  <el-row :gutter="40">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div @click="handleSetLineChartData('newVisitis')" class="card-panel">
        <div class="card-panel-icon-wrapper icon-people">
          <svg-icon name="peoples" class="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            New Visits
          </div>
          <count-to
            :start-val="0"
            :end-val="102400"
            :duration="2600"
            class="card-panel-num"
          />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div @click="handleSetLineChartData('purchases')" class="card-panel">
        <div class="card-panel-icon-wrapper icon-money">
          <svg-icon name="money" class="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Purchases
          </div>
          <count-to
            :start-val="0"
            :end-val="9280"
            :duration="3200"
            class="card-panel-num"
          />
        </div>
      </div>

    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div @click="handleSetLineChartData('messages')" class="card-panel">
        <div class="card-panel-icon-wrapper icon-message">
          <svg-icon name="message" class="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Messages
          </div>
          <count-to
            :start-val="0"
            :end-val="81212"
            :duration="3000"
            class="card-panel-num"
          />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div @click="handleSetLineChartData('shoppings')" class="card-panel">
        <div class="card-panel-icon-wrapper icon-shopping">
          <svg-icon name="shopping" class="card-panel-icon"/>
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">
            Shoppings
          </div>
          <count-to
            :start-val="0"
            :end-val="13600"
            :duration="3600"
            class="card-panel-num"
          />
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CountTo from "vue-count-to";

@Component({
  name: "PanelGroup",
  components: {
    CountTo,
  },
})
export default class PanelGroup extends Vue {
  private handleSetLineChartData(type: string) {
    this.$emit("handleSetLineChartData", type);
  }
}
</script>
<style lang="less">
.card-panel-col {
  margin-bottom: 32px;
}

.card-panel {
  height: 108px;
  cursor: pointer;
  position: relative;
  font-size: 12px;
  overflow: hidden;
  color: #666666;
  background-color: #ffffff;
  box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.05);

  &:hover {
    .card-panel-icon-wrapper {
      color: #fff;
    }

    .icon-people {
      background: #40c9c6;
    }

    .icon-message {
      background: #36a3f7;
    }

    .icon-money {
      background: #f4516c;
    }

    .icon-shopping {
      background: #34bfa3;
    }
  }

  .icon-people {
    color: #40c9c6;
  }

  .icon-message {
    color: #36a3f7;
  }

  .icon-money {
    color: #f4516c;
  }

  .icon-shopping {
    color: #34bfa3;
  }

  .card-panel-icon-wrapper {
    float: left;
    padding: 16px;
    margin: 14px 0 0 14px;
    transition: all 0.38s ease-out;
    border-radius: 6px;
  }

  .card-panel-icon {
    font-size: 48px;
  }

  .card-panel-description {
    float: right;
    font-weight: bold;
    margin: 26px 30px 26px 0;

    .card-panel-text {
      line-height: 18px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 16px;
      margin-bottom: 12px;
    }

    .card-panel-num {
      font-size: 20px;
    }
  }
}
</style>