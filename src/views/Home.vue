<template>
  <div class="home">
    <h1>home</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { login } from "@/api/users";

@Component({
  name: "Login",
})
export default class extends Vue {
  mounted() {
    this.Login();
  }

  private async Login() {
    const data = await login({
      username: "editor",
      password: "123456",
    });
  }
}
</script>
