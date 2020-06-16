<template>
  <div>
    <h1>Options</h1>
    <form v-if="settings" @submit.prevent="save">
      <h2>Known Bad Sites</h2>
      <textarea v-model="flattenedBadSites" placeholder="add multiple lines"></textarea>
      <h2>Greyscaler</h2>
      <label for="enabled">Enabled?</label>
      <input id="enabled" type="checkbox" v-model="settings.greyscale.enabled" />
      <h2>Question Blurrer</h2>
      <label for="enabled">Enabled?</label>
      <input id="enabled" type="checkbox" v-model="settings.questionsBlurring.enabled" />
      <h2>Entry Takeover</h2>
      <label for="enabled">Enabled?</label>
      <input id="enabled" type="checkbox" v-model="settings.entryTakeover.enabled" />
      <input type="submit" value="Submit" />
    </form>
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
  computed: {
    flattenedBadSites: {
      get: function() {
        if (this.settings == null) {
          return "";
        }
        return this.settings.badSites.join("\n");
      },
      set: function(newValue) {
        const parts = newValue.split("\n");
        this.settings.badSites = parts;
      }
    }
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
    }
  }
};
</script>
