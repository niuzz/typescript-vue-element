<template>
  <div>
    {{ name }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "Sidebar",
})
export default class Sidebar extends Vue {
  private name: string = "Sidebar page";
}
</script>

<style scoped></style>
