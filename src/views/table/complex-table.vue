<template>
  <div>
    complex-table
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "complex-table",
})
export default class extends Vue {
  private name: string = "table";
}
</script>
