<template>
  <v-app>
    <v-app-bar>
      <nav>
        <AboutView />
        <HomeView />
      </nav>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AboutView from "./views/AboutView.vue";
import HomeView from "./views/HomeView.vue";
export default defineComponent({
  name: "App",
  components: { AboutView, HomeView },
});
</script>
