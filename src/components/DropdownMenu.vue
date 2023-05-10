<template>
  <v-menu offset-y>
    <template #activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on"
        >Choose an option</v-btn
      >
    </template>
    <v-list>
      <v-list-item
        v-for="(option, index) in options"
        :key="index"
        @click="selectOption(option)"
      >
        <v-list-item-title>{{ option }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "DropdownMenu",
  data() {
    return {
      options: ["Option 1", "Option 2", "Option 3"],
    };
  },
  methods: {
    selectOption(option) {
      // Do something with the selected option
      console.log("Selected option:", option);
    },
  },
};
</script>
