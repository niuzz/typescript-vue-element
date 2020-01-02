<template>
  <el-breadcrumb class="app-breadcrumb">
    <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path">
      <span
        v-if="
          item.redirect === 'noredirect' || index === 'breadcrumbs.length - 1'
        "
        class="no-redirect"
        >{{ $t("route." + item.meta.title) }}</span
      >
      <a v-else @click.prevent="handleLink(item)">{{
        $t("route." + item.meta.title)
      }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Route, RouteRecord } from "vue-router";

@Component({
  name: "Breadcrumb",
})
export default class Breadcurmb extends Vue {
  private breadcrumbs: RouteRecord[] = [];

  @Watch("$route")
  private onRouteChange(route: Route) {
    if (route.path.startsWith("/redirect/")) {
      return;
    }
    this.getBreadCrumb();
  }

  created() {
    this.getBreadCrumb();
  }

  private getBreadCrumb() {
    let matched = this.$route.matched.filter(
      item => item.meta && item.meta.title,
    );
    const first = matched[0];
    if (!this.isDashboard(first)) {
      matched = [
        { path: "/dashboard", meta: { title: "dashboard" } } as RouteRecord,
      ].concat(matched);
    }
    this.breadcrumbs = matched.filter(item => {
      return item.meta && item.meta.title && item.meta.breadcrumb !== false;
    });
  }

  private isDashboard(route: RouteRecord) {
    const name = route && route.name;
    if (!name) {
      return false;
    }
    return name.trim().toLocaleLowerCase() === "Dashboard".toLocaleLowerCase();
  }
}
</script>
<style lang="less">
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 9px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
