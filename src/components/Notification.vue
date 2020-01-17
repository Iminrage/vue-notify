<template>
  <table>
    <transition-group name="notify" tag="tbody">
      <tr v-for="(message, index) in messages" :key="index">
        <td>{{ message.title }} {{ message.text }}</td>
      </tr>
    </transition-group>
  </table>
</template>
<script>
export default {
  name: "Notification",
  props: {
    messages: {
      type: Array,
      required: true
    }
  }
};
</script>