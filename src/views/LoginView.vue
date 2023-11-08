<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
  <form>
    <label for="email">Email address</label>
    <input id="email" type="email" />
    <label for="password">Password</label>
    <input type="password" id="password" />
    <button type="submit">Log in</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginView",
});
</script>
