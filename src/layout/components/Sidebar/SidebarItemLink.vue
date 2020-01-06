<template>
  <a v-if="isExternal(to)" target="_self" rel="noopener" :href="to">
    <slot />
  </a>
  <router-link v-else :to="to">
    <slot />
  </router-link>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { isExternal } from "@/utils/validate";

@Component({
  name: "sidebar-item-link",
})
export default class SidebarItemLink extends Vue {
  @Prop({ required: true }) private to!: string;

  private isExternal = isExternal;
}
</script>
