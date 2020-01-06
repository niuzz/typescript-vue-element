import path from "path"; import path from "path";
<template>
  <div
    v-if="!item.meta || !item.meta.hidden"
    :class="[
      'menu-wrapper',
      isCollapse ? 'simple-mode' : 'full-mode',
      { 'first-level': isFirstLevel },
    ]"
  >
    <template v-if="!alwaysShowRootMenu && theOnlyOneChild">
      <sidebar-item-link
        v-if="theOnlyOneChild.meta"
        :to="resolvePath(theOnlyOneChild.path)"
      >
        <el-menu-item>
          <svg-icon
            v-if="theOnlyOneChild.meta.icon"
            :name="theOnlyOneChild.meta.icon"
          />
          <span v-if="theOnlyOneChild.meta.title" slot="title">
            {{ $t("route." + theOnlyOneChild.meta.title) }}
          </span>
        </el-menu-item>
      </sidebar-item-link>
    </template>
    <el-submenu v-else :index="resolvePath(item.path)">
      <template slot="title">
        <svg-icon v-if="item.meta && item.meta.icon" :name="item.meta.icon" />
        <span>{{ $t("route." + item.meta.title) }}</span>
      </template>
      <template v-if="item.children">
        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
        />
      </template>
    </el-submenu>
  </div>
</template>
<script lang="ts">
import path from "path";
import { Component, Prop, Vue } from "vue-property-decorator";
import { RouteConfig } from "vue-router";
import { isExternal } from "@/utils/validate";
import SidebarItemLink from "@/layout/components/Sidebar/SidebarItemLink.vue";

@Component({
  name: "sidebar-item",
  components: { SidebarItemLink },
})
export default class extends Vue {
  @Prop({ required: true }) private item!: RouteConfig;
  @Prop({ default: "" }) private basePath!: string;
  @Prop({ default: true }) private isFirstLevel!: boolean;
  @Prop({ default: false }) private isCollapse!: boolean;

  get alwaysShowRootMenu() {
    return !!(this.item.meta && this.item.meta.alwaysShow);
  }

  get showingChildNumber() {
    if (this.item.children) {
      const showingChildren = this.item.children.filter(item => {
        if (item.meta && item.meta.hidden) {
          return false;
        } else {
          return true;
        }
      });
      return showingChildren.length;
    }
    return 0;
  }

  get theOnlyOneChild() {
    if (this.showingChildNumber > 1) {
      return null;
    }
    if (this.item.children) {
      for (let child of this.item.children) {
        if (!child.meta || !child.meta.hidden) {
          return child;
        }
      }
    }
    // If there is no children, return itself with path removed,
    // because this.basePath already conatins item's path information
    return { ...this.item, path: "" };
  }

  private resolvePath(routePath: string) {
    if (isExternal(routePath)) {
      return routePath;
    }
    if (isExternal(this.basePath)) {
      return this.basePath;
    }
    return path.resolve(this.basePath, routePath);
  }
}
</script>
<style lang="less">
.el-submenu.is-active > .el-submenu__title {
  color: @subMenuActiveText !important;
}

.full-mode {
  .nest-menu .el-submenu > .el-submenu__title,
  .el-submenu .el-menu-item {
    min-width: @sideBarWidth !important;
    background-color: @subMenuBg !important;

    &:hover {
      background-color: @subMenuHover !important;
    }
  }
}

.simple-mode {
  &.first-level {
    .submenu-title-noDropdown {
      padding: 0 !important;
      position: relative;

      .el-tooltip {
        padding: 0 !important;
      }
    }

    .el-submenu {
      overflow: hidden;

      & > .el-submenu__title {
        padding: 0px !important;

        .el-submenu__icon-arrow {
          display: none;
        }

        & > span {
          visibility: hidden;
        }
      }
    }
  }
}
</style>
<style lang="less" scoped>
.svg-icon {
  margin-right: 16px;
}

.simple-mode {
  .svg-icon {
    margin-left: 20px;
  }
}
</style>
