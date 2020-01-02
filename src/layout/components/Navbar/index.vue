<template>
  <div class="navbar">
    <hamburger
      class="hamburger-container"
      @toggleClick="toggleSidebar"
      :is-active="sidebar.opened"
    />
    <breadcurmb class="breadcrumb-container" />
    <div class="right-menu">
      <!--<el-dropdown class="avatar-container right-menu-item hover-effect">
        <div class="avatar-wrapper">
          <img
            :src="avatar + '?imageView2/1/w/80/h/80'"
            alt="user"
            class="user-avatar"
          />
          <i class="el-icon-caret-bottom" />
        </div>
      </el-dropdown>-->
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Hamburger from "@c/Hamburger/index.vue";
import Breadcurmb from "@/components/Breadcrumb/index.vue";
import { AppModule } from "@/store/modules/app";
import { UserModule } from "@/store/modules/user";

@Component({
  name: "Navbar",
  components: {
    Hamburger,
    Breadcurmb,
  },
})
export default class Navbar extends Vue {
  get sidebar() {
    return AppModule.sidebar;
  }

  get avatar() {
    return UserModule.avatar;
  }

  private async toggleSidebar() {
    await AppModule.ToggleSideBar(false);
  }
}
</script>
<style lang="less">
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.8);
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    padding: 0 15px;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
  .breadcrumb-container {
    float: left;
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 100%;

    &:focus {
      outline: none;
    }

    .avatar-container {
      margin-right: 30px;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
