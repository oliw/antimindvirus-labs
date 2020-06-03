<template>
  <div>
    <h1>Options</h1>
    <form v-if="settings" @submit.prevent="save">
      <h2>Question Blurrer</h2>
      <label for="enabled">Enabled?</label>
      <input
        id="enabled"
        type="checkbox"
        v-model="settings.features.questionsBlurring.enabled"
      />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>
<script>
import {fetchSettings, store} from "common/settings";

export default {
  name: "App",
  data() {
    return {
      settings: null,
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
    save: async function() {
      return store(this.settings);
    },
  },
};
</script>
