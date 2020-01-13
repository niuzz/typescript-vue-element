<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
          :is-collapse="isCollapse"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { AppModule } from "@/store/modules/app";
import SidebarItem from "@/layout/components/Sidebar/SidebarItem.vue";
import { PermissionModule } from "@/store/modules/permission";

@Component({
  name: "Sidebar",
  components: {
    SidebarItem,
  },
})
export default class Sidebar extends Vue {
  get sidebar() {
    return AppModule.sidebar;
  }

  get routes() {
    return PermissionModule.routes;
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

<style lang="less">
.sidebar-container {
  .el-scrollbar__view {
    height: 100%;
  }

  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out,
      0s padding-right ease-in-out;
  }
}
</style>
<style lang="less" scoped>
.el-scrollbar {
  height: 100%;
}

.el-menu {
  height: 100%;
}
</style>
