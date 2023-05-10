<template>
  <div class="rectangle">
    <div class="title">{{ title }}</div>
    <div class="director">режисер {{ director }}</div>
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
}

.director {
  font-size: 20px;
  font-family: Arial;
  margin-top: auto;
}
</style>
