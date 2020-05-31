import Service from "@ember/service";
import { inject as service } from "@ember/service";

const SETTINGS_KEY = "settings";

const DEFAULT_SETTINGS = {
  questionHeadlineFilterer: {
    enabled: false,
  },
};

export default class SettingsStoreService extends Service {
  @service chromeStorage;

  async store(settings) {
    debugger;
    return this.chromeStorage.set(SETTINGS_KEY, settings);
  }

  async fetch() {
    const settings = await this.chromeStorage.get(SETTINGS_KEY);
    return {
      ...DEFAULT_SETTINGS,
      ...settings,
    };
  }
}
