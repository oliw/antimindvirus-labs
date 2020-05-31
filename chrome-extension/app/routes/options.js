import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class OptionsRoute extends Route {
  @service settingsStore;

  async model() {
    const settings = await this.settingsStore.fetch();
    return {
      settings,
    };
  }
}
