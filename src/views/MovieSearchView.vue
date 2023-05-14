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
      const genres = store.favGenres.map((genre) => genre.id);
      api
        .getMoviesByGenres(genres)
        .then((data) => (store.movies = data))
        .catch((error) => console.error(error));
    });
    return { store };
  },
});
</script>
