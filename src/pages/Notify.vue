<template>
  <div class="notification-page">
    <div class="notification">
      <Preloader v-if="loading" :width="90" :height="90"></Preloader>
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
<style scoped>
.notification-page {
  width: 100%;
}
.notification {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  background: white;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}
</style>