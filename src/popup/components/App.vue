<template>
  <div>
    <small>Anti(Mind)Virus</small>
    <button @click="toggle">{{ settings.allDisabled ? 'Enable' : 'Disable' }}</button>
    <button @click="showOptions">Options</button>
  </div>
</template>
<script>
import { fetchSettings, store } from "common/settings";

export default {
  name: "App",
  data() {
    return {
      settings: null
    };
  },
  created: function() {
    this.fetchSettings();
  },
  methods: {
    fetchSettings: async function() {
      const settings = await fetchSettings();
      this.settings = settings;
    },
    toggle: async function() {
      this.settings.allDisabled = !this.settings.allDisabled;
      store(this.settings);
    },
    showOptions: function() {
      chrome.runtime.openOptionsPage();
    }
  }
};
</script>
