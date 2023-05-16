<template>
  <div class="container mt-5">
    <h1>{{ message }}</h1>
    <form>
      <div class="form-group">
        <label for="movie">Фільм</label>
        <input
          type="text"
          class="form-control"
          id="movie"
          v-model="title"
          disabled
        />
      </div>
      <div class="form-group">
        <label for="hallId">Номер залу</label>
        <input
          type="number"
          class="form-control"
          id="hallId"
          v-model="session.hallId"
        />
      </div>
      <div class="form-group">
        <label for="start-time">Час початку</label>
        <input
          type="datetime-local"
          class="form-control"
          id="start-time"
          v-model="session.startTime"
        />
      </div>
      <div class="form-group">
        <label for="end-time">Час закінчення</label>
        <input
          type="datetime-local"
          class="form-control"
          id="end-time"
          v-model="session.endTime"
        />
      </div>
      <div class="submit-button-container">
        <submitButton :func="addSession" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { session } from "@/types/session";
import submitButton from "@/features/submitButton.vue";
import api from "@/api";
import { v4 as uuid } from "uuid";
import { store } from "@/store/Store";

export default defineComponent({
  name: "AddSession",
  data() {
    return {
      session: {} as session,
      message: "Введіть дані",
      title: store.focusMovieName,
      id: store.focusMovieId,
    };
  },
  methods: {
    async addSession() {
      this.session.id = uuid();
      this.session.movieId = this.id;
      this.message = await api.addSession(this.session);
    },
  },
  components: {
    submitButton,
  },
});
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="number"],
input[type="datetime-local"] {
  border-radius: 0;
  border: 2px solid #ccc;
  padding: 0.5rem;
  width: 100%;
}

.submit-button-container {
  display: flex;
  justify-content: center;
}
</style>
