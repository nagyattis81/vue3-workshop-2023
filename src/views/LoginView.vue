<template>
  <form class="pt-4">
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="email"
        v-model="state.email"
        required
      />
      <div
        class="text-danger"
        v-for="error of vuelidate$.email.$silentErrors"
        :key="error.$uid"
      >
        {{ error.$message }}
      </div>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        v-model="state.password"
        required
      />
      <div
        class="text-danger"
        v-for="error of vuelidate$.password.$silentErrors"
        :key="error.$uid"
      >
        {{ error.$message }}
      </div>
    </div>
    <button
      type="submit"
      class="btn btn-success"
      :disabled="vuelidate$.$invalid"
      v-on:click.prevent="AuthenticationService.login()"
    >
      Log in
    </button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import AuthenticationService from "@/services/authentication.service";

const state = reactive({
  email: "",
  password: "",
});
const rules = {
  email: { required, email },
  password: { required },
};

const vuelidate$ = useVuelidate(rules, state);
</script>
