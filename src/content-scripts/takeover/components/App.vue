<style scoped>
.container {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(222, 61, 61, 1);
  z-index: 900;
  width: 100%;
  height: 100%;
}
</style>
<template>
  <div v-if="isVisible" class="container">
    <h1>Yo!, I'm not a good use of time!</h1>
    <button @click="dismiss">Dismiss</button>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    dismiss: function() {
      this.isVisible = false;
    },
  },
};
</script>
