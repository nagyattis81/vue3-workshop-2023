<template>
  <div class="status">
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="service in services" :key="service.name">
          <td>{{ service.name }}</td>
          <td>{{ service.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";
import { API_URL } from "@/constants/api";
import {
  SystemStatusHealtResponse,
  SystemStatusHealtService,
} from "@/interfaces/system-status.healt.response";
import { Service } from "@/interfaces/service";

const services = ref<Service[]>([]);

axios.get<SystemStatusHealtResponse>(API_URL).then((response) => {
  const responseServices = response.data.services;
  services.value = Object.keys(responseServices).map((name): Service => {
    const servcie = Object(responseServices)[name] as SystemStatusHealtService;
    return { name, status: servcie.healthStatus };
  });
});

export default defineComponent({
  name: "StatusView",
  setup() {
    return { services };
  },
});
</script>
