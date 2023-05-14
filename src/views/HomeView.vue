<template>
  <MovieInfo
    v-for="(movie, index) in store.movies"
    :key="index"
    :id="movie.id"
    :title="movie.title"
    :director="movie.director"
    :genre="store.genres.find((g) => g.id === movie.genreId)?.name ?? undefined"
  />
</template>

<script lang="ts">
import MovieInfo from "@/components/MovieInfo.vue";
import { defineComponent, onMounted } from "vue";
import api from "@/api";
import { store } from "@/store/Store";
export default defineComponent({
  name: "HomeView",

  components: {
    MovieInfo,
  },
  setup() {
    onMounted(() => {
      api.getMovies().then((data) => (store.movies = data));
      api.getGenres().then((data) => (store.genres = data));
    });
    return { store };
  },
});
</script>
