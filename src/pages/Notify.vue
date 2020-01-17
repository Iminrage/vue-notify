<template>
  <div class="notification-page">
    <div class="notification">
      <Preloader v-if="loading" :width="45" :height="45"></Preloader>
      <Notification v-if="!loading" :messages="messages"></Notification>
    </div>
  </div>
</template>
<script>
import Notification from "@/components/Notification.vue";
import Preloader from "@/components/Preloader.vue";
export default {
  components: { Notification, Preloader },
  data() {
    return {
      loading: true,
      messages: [
        { title: "message1", text: "message" },
        { title: "message2", text: "message" },
        { title: "message3", text: "message" },
        { title: "message4", text: "message" }
      ]
    };
  }
};
</script>