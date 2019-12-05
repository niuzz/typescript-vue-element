<template>
  <div class="dashboard-container">
    <h1>dashboard</h1>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class extends Vue {
  mounted() {
    console.log("dashboard");
  }
}
</script>

<style lang="less">
.dashboard-container {
  background: "#333";
  text-align: "center";
}
</style>
