<template>
  <v-app>
    <Toolbar class="header" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Toolbar from "@/Toolbar/Toolbar.vue";
export default defineComponent({
  name: "App",
  components: {
    Toolbar,
  },
});
</script>

<style></style>
