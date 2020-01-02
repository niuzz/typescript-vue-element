<template>
  <div>
    <sidebar-item />
  </div>
  <!--<el-scrollbar wrap-class="scrollbar-wrapper">
    hello
    <el-menu :default-active="activeMenu"> </el-menu>
  </el-scrollbar>-->
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { AppModule } from "@/store/modules/app";
import SidebarItem from "@/layout/components/Sidebar/SidebarItem.vue";

@Component({
  name: "Sidebar",
  components: {
    SidebarItem,
  },
})
export default class Sidebar extends Vue {
  private name: string = "Sidebar page";

  get sidebar() {
    return AppModule.sidebar;
  }

  get isCollapse() {
    return !this.sidebar.opened;
  }

  get activeMenu() {
    const route = this.$route;
    const { meta, path } = route;
    if (meta.activeMenu) {
      return meta.activeMenu;
    }
    return path;
  }
}
</script>

<style scoped></style>
