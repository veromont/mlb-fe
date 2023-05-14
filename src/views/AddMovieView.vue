<template>
  <div class="container mt-5">
    <h1>{{ message }}</h1>
    <form>
      <div class="form-group">
        <label for="title">Назва фільму</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="movie.title"
        />
      </div>
      <div class="form-group">
        <label for="director">Режисер</label>
        <input
          type="text"
          class="form-control"
          id="director"
          v-model="movie.director"
        />
      </div>
      <div class="form-group">
        <label for="release-date">Дата виходу</label>
        <input
          type="date"
          class="form-control"
          id="release-date"
          v-model="movie.releaseDate"
        />
      </div>
      <div class="form-group">
        <label for="rating">Рейтинг</label>
        <input
          type="number"
          class="form-control"
          id="rating"
          v-model="movie.rating"
        />
      </div>
      <div class="form-group">
        <label for="duration">Тривалість</label>
        <input
          type="time"
          class="form-control"
          id="duration"
          v-model="movie.duration"
        />
      </div>
      <div class="form-group">
        <label for="genre">Жанр</label>
        <select class="form-control" id="genre" v-model="movie.genreId">
          <option
            v-for="genre in store.genres"
            :key="genre.id"
            :value="genre.id"
          >
            {{ genre.name }}
          </option>
        </select>
      </div>
      <div class="submit-button-container">
        <submitButton :func="addMovie" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { store } from "@/store/Store";
import { movie } from "@/types/movie";
import submitButton from "@/features/submitButton.vue";
import api from "@/api";
import { v4 as uuid } from "uuid";

export default defineComponent({
  name: "AddMovie",
  setup() {
    onMounted(() => {
      api
        .getGenres()
        .then((data) => (store.genres = data))
        .catch((error) => console.error(error));
    });
    return { store };
  },
  data() {
    return {
      movie: {} as movie,
      message: "Введіть дані",
    };
  },
  methods: {
    async addMovie() {
      this.movie.id = uuid();
      if (this.movie.duration.length <= 5) {
        this.movie.duration += ":00";
      }
      this.message = await api.addMovie(this.movie);
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

input[type="text"] {
  border-radius: 0;
  border: 2px solid #ccc;
  padding: 0.5rem;
  width: 100%;
}

select {
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
