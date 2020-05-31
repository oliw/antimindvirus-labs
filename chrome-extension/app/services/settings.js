import Service from "@ember/service";
import { inject as service } from "@ember/service";

const SETTINGS_KEY = "settings";

const DEFAULT_SETTINGS = {
  foo: "bar",
};

export default class SettingsService extends Service {
  @service chromeStorage;

  async store(settings) {
    set(SETTINGS_KEY, settings);
  }

  async fetch() {
    const settings = await this.chromeStorage.get(SETTINGS_KEY);
    return {
      ...DEFAULT_SETTINGS,
      ...settings,
    };
  }
}
