<template>
  <div :class="[{ 'is-active': isActive }]" @click="toggleClick">
    <svg-icon name="hamburger" width="20" height="20" />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "Hamburger",
})
export default class Hamburger extends Vue {
  @Prop({ default: false }) private isActive!: boolean;

  private toggleClick() {
    this.$emit("toggleClick");
  }
}
</script>
<style lang="less">
.svg-icon {
  vertical-align: middle;
  cursor: pointer;
}
</style>
