<template>
  <div class="rectangle">
    <div class="info">
      <div class="title">{{ title }}</div>
      <div class="director">Режисер: {{ director }}</div>
      <div class="genre" v-if="genre">Жанр: {{ genre }}</div>
    </div>
    <div v-if="store.mode === 'Адміністратор'" class="icons-holder">
      <mdicon class="icon" size="0" name="delete" :onclick="deleteMovie" />
      <mdicon class="icon" size="0" name="pencil" />
      <mdicon
        class="icon"
        size="0"
        name="plus-box"
        :onclick="goToAddSessionView"
      />
    </div>
  </div>
</template>

<script lang="ts">
import api from "@/api";
import { store } from "@/store/Store";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MovieInfo",
  setup() {
    return { store };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: false,
    },
  },
  methods: {
    deleteMovie() {
      api.deleteMovie(this.id);
      api.getMovies().then((data) => (store.movies = data));
    },
    goToAddSessionView() {
      this.$router.push("/add-session");
    },
  },
});
</script>

<style scoped>
.rectangle {
  border-radius: 10px;
  border: 2px solid black;
  padding: 15px;
  background-color: lightyellow;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.info {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 30px;
  font-family: "Times New Roman";
  font-weight: bold;
  margin-bottom: 5px;
  color: black;
}

.director {
  font-size: 20px;
  font-family: Arial;
  font-style: italic;
  margin-bottom: 10px;
  color: gray;
}

.genre {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: chocolate;
}

.icons-holder {
  position: absolute;
  top: 10px;
  right: 10px;
}

.icon {
  font-size: 24px;
}
.icon:hover {
  cursor: pointer;
}
</style>
