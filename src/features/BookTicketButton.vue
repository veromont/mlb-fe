<template>
  <v-btn class="pretty-button" @click="downloadFile">Забронювати квиток</v-btn>
</template>

<script lang="ts">
import api from "@/api";

export default {
  name: "BookTicketButton",
  props: {
    sessionId: {
      type: String,
      required: true,
    },
  },
  methods: {
    async downloadFile() {
      const ticketId = await api.bookTicket(this.sessionId);
      const blob = await api.getPdf(ticketId);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Квиток.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    },
  },
};
</script>

<style>
.pretty-button {
  align-items: center;
  background-image: linear-gradient(
    144deg,
    rgb(0, 204, 130) 11.2%,
    rgb(58, 181, 46) 91.7%
  );
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: rgb(64, 48, 15);
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 25px 24px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
}

.pretty-button:active,
.pretty-button:hover {
  outline: 0;
}

@media (min-width: 768px) {
  .pretty-button {
    font-size: 24px;
    min-width: 196px;
  }
}
</style>
