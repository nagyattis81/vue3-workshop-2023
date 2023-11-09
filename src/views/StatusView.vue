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
            class="bi"
            :class="
              service.status === 'UP'
                ? ['bi-check-circle-fill', 'text-success']
                : ['bi-x-circle-fill', 'text-danger']
            "
          ></i>
        </td>
      </tr>
    </tbody>
  </table>
  <button
    class="btn btn-secondary"
    v-on:click.prevent="AuthenticationService.logout()"
  >
    Log out
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { API_URL } from "@/constants/api";
import { SystemStatusHealtResponse } from "@/interfaces/system-status.healt.response";
import { Service } from "@/interfaces/service";
import AuthenticationService from "@/services/authentication.service";
import { ServiceStatusType } from "@/types/service-status-type";

const services = ref<Service[]>([]);
axios.get<SystemStatusHealtResponse>(API_URL).then((response) => {
  const responseServices = response.data.services;
  services.value = Object.keys(responseServices)
    .sort()
    .map((name) => {
      const servcie = responseServices[name as ServiceStatusType];
      return { name, status: servcie.healthStatus };
    });
});
</script>
