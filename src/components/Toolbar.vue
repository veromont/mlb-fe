<template>
  <v-toolbar>
    <v-col v-for="(component, index) in components" :key="index" cols="4">
      <component :is="component" />
    </v-col>
  </v-toolbar>
</template>

<script lang="ts">
export default {
  name: "Toolbar",
  props: {
    components: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
