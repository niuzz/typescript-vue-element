<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">
          {{ $t("login.title") }}
        </h3>
      </div>
      <el-form-item prop="username">
        <el-input placeholder="姓名" v-model="loginForm.username" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input placeholder="密码" v-model="loginForm.password" />
      </el-form-item>
      <el-form-item class="login-button-group">
        <el-button @click="handleReset" type="warning">
          {{ $t("login.reset") }}
        </el-button>
        <el-button @click="handleSubmit" type="primary" :loading="loading">
          {{ $t("login.login") }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UserModule } from "@/store/modules/user";
import { Dictionary } from "vue-router/types/router";
import { isValidUsername } from "@/utils/validate";

@Component({
  name: "Login",
})
export default class extends Vue {
  private validateUsername = (rule: any, value: string, callback: Function) => {
    if (!isValidUsername(value)) {
      callback(new Error("Please enter the correct user name"));
    } else {
      callback();
    }
  };
  private validatePassword = (rule: any, value: string, callback: Function) => {
    if (value.length < 6) {
      callback(new Error("password can not be less then 6 digits"));
    } else {
      callback();
    }
  };
  private loginForm = {
    username: "",
    password: "",
  };
  private loginRules = {
    username: [{ validator: this.validateUsername, trigger: "blur" }],
    password: [{ validator: this.validatePassword, trigger: "blur" }],
  };
  private loading = false;
  private redirect?: string;
  private otherQuery: Dictionary<string> = {};

  private async handleSubmit() {
    const el: any = this.$refs.loginForm;
    el.validate(async (valid: boolean) => {
      if (valid) {
        this.loading = true;
        await UserModule.Login({
          username: this.loginForm.username,
          password: this.loginForm.password,
        });
        this.loading = false;
        this.$router.push({
          path: this.redirect || "/",
          query: this.otherQuery,
        });
        this.loading = false;
      } else {
        return false;
      }
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
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    .title-container {
      position: relative;

      .title {
        font-size: 26px;
        color: @lightGray;
        margin: 0 auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }

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
        color: #fff;
        caret-color: #fff;

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
      border: none;
    }
  }
}
</style>
