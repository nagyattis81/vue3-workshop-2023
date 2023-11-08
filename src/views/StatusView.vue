<template>
  <div class="d-flex justify-content-center" v-if="!services.length">
    <div class="spinner-border text-success" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <table class="table table-striped table-bordered" v-else>
    <thead class="table-success">
      <tr>
        <th>Microservice</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="service in services" :key="service.name">
        <td>{{ service.name }}</td>
        <td>
          <i
            v-if="service.status === 'UP'"
            class="bi bi-check-circle-fill text-success"
          ></i>
          <i
            v-if="service.status === 'DOWN'"
            class="bi bi-x-circle-fill text-danger"
          ></i>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ref } from "vue";
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
</script>
