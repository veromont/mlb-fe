<template>
  <v-app>
    <niceBackground />
    <Toolbar class="header" />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Toolbar from "@/Toolbar/Toolbar.vue";
import niceBackground from "./features/niceBackground.vue";

export default defineComponent({
  name: "App",
  components: {
    Toolbar,
    niceBackground,
  },
});
</script>

<style>
.header {
  width: 100%;
  min-width: 1300px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
