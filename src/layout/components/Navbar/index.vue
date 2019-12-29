<template>
  <div>
    <hamburger @toggleClick="toggleSidebar" />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Hamburger from "@c/Hamburger/index.vue";

@Component({
  name: "Navbar",
  components: {
    Hamburger,
  },
})
export default class Navbar extends Vue {
  private toggleSidebar() {
    console.log("toggleSidebar");
  }
}
</script>
<style lang="less"></style>
