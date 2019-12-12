<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >
      <el-form-item>
        <el-input placeholder="姓名" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input placeholder="密码" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item class="login-button-group">
        <el-button @click="handleReset" type="warning">reset</el-button>
        <el-button @click="handleSubmit" type="primary">submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UserModule } from "@/store/modules/user";
import { Dictionary } from "vue-router/types/router";

@Component({
  name: "Login",
})
export default class extends Vue {
  private loginForm = {
    username: "",
    password: "",
  };
  private redirect?: string;
  private otherQuery: Dictionary<string> = {};

  private async handleSubmit() {
    await UserModule.Login({
      username: this.loginForm.username,
      password: this.loginForm.password,
    });
    this.$router.push({
      path: this.redirect || "/",
      query: this.otherQuery,
    });
  }

  private handleReset() {
    this.loginForm.username = "";
    this.loginForm.password = "";
  }
}
</script>

<style lang="less">
.login-container {
  height: 100%;
  width: 100%;
  padding: 10px;
  overflow: hidden;
  background-color: @loginBg;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    overflow: hidden;

    .el-input {
      display: inline-block;
      width: 85%;
      height: 47px;

      input {
        height: 47px;
        background: transparent;
        border: 0;
        border-radius: 0;
        padding: 12px 5px;
        color: #333;
        caret-color: #333333;

        &:-webkit-autofill {
          box-shadow: 0 0 0 1000px #333 inset !important;
          -webkit-text-fill-color: #fff !important;
        }
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;

    &.login-button-group {
      background-color: transparent;
    }
  }
}
</style>
