<template>
  <div>
    <sidebar-item-link />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SidebarItemLink from "@/layout/components/Sidebar/SidebarItemLink.vue";

@Component({
  name: "sidebar-item",
  components: {
    SidebarItemLink,
  },
})
export default class extends Vue {}
</script>
