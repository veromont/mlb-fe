<template>
  <div class="rectangle">
    <div class="title">{{ title }}</div>
    <div class="director">Режисер: {{ director }}</div>
    <div class="genre" v-if="genre">Жанр: {{ genre }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MovieInfo",
  props: {
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
});
</script>

<style scoped>
.rectangle {
  border-radius: 10px;
  border: 2px solid black;
  padding: 15px;
  background-color: honeydew;
  flex-direction: column;
  display: flex;
  text-align: left;
}

.title {
  font-size: 30px;
  font-family: "Times New Roman";
  font-weight: bold;
  margin-bottom: 5px;
}

.director {
  font-size: 20px;
  font-family: Arial;
  font-style: italic;
  margin-bottom: 10px;
}

.genre {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.description {
  font-size: 16px;
  line-height: 1.5;
}
</style>
