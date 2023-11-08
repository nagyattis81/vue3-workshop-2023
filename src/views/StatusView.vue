<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { API_URL } from "@/constants/api";

axios.get(API_URL).then((response) => {
  console.log(response.data);
});

export default defineComponent({
  name: "StatusView",
});
</script>
