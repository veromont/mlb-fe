<template>
  <SessionInfo
    v-for="(session, index) in store.sessions"
    :key="index"
    :movieTitle="session.movie"
    :id="session.id"
    :dateFrom="session.startTime"
    :dateTo="session.endTime"
    :hall="session.hall"
  />
</template>

<script lang="ts">
import SessionInfo from "@/components/SessionInfo.vue";
import { defineComponent, onMounted } from "vue";
import api from "@/api";
import { store } from "@/store/Store";

export default defineComponent({
  name: "HomeView",

  components: {
    SessionInfo,
  },
  setup() {
    onMounted(() => {
      api
        .getSessions()
        .then((data) => (store.sessions = data))
        .catch((error) => console.error(error));
      api.getGenres().then((data) => (store.genres = data));
    });
    return { store };
  },
});
</script>
