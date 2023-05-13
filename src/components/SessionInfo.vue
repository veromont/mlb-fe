<template>
  <div class="rectangle">
    <div class="info">
      <div class="movie">{{ movieTitle }}</div>
      <div class="hall">Зал: {{ hall }}</div>
      <div class="date">Початок: {{ toCorrectFormat(dateFrom) }}</div>
      <div class="date">Кінець: {{ toCorrectFormat(dateTo) }}</div>
    </div>
    <div class="action">
      <BookTicketButton :sessionId="id" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BookTicketButton from "@/features/BookTicketButton.vue";

export default defineComponent({
  name: "SessionInfo",
  methods: {
    toCorrectFormat(dateString: string): string {
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZone: "Europe/Kiev",
      };

      const date = new Date(dateString);
      return date.toLocaleString("uk-UA", options);
    },
  },
  props: {
    movieTitle: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    dateFrom: {
      type: String,
      required: true,
    },
    dateTo: {
      type: String,
      required: true,
    },
    hall: {
      type: String,
      required: true,
    },
  },
  components: {
    BookTicketButton,
  },
});
</script>

<style scoped>
.rectangle {
  border-radius: 10px;
  border: 2px solid black;
  padding: 15px;
  background-color: honeydew;
  flex-direction: row;
  display: flex;
  text-align: left;
  position: relative;
}
.info {
  display: flex;
  flex-direction: column;
}
.action {
  position: absolute;
  right: 0;
  bottom: 0;
}
.movie {
  font-size: 30px;
  font-family: "Times New Roman";
  font-weight: bold;
  margin-bottom: 5px;
}

.date {
  font-size: 20px;
  font-family: Arial;
  font-style: italic;
  margin-bottom: 10px;
}

.hall {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
