<template>
  <form class="pt-4">
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input type="email" class="form-control" id="email" v-model="email" />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        v-model="password"
      />
    </div>
    <button
      type="submit"
      class="btn btn-success"
      v-on:click.prevent="login()"
      :disabled="!email || !password"
    >
      Log in
    </button>
  </form>
</template>

<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";

const email = ref("");
const password = ref("");

function login() {
  router.push("/status");
}
</script>
