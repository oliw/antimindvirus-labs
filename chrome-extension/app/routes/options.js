import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class OptionsRoute extends Route {
  @service settings;

  async model() {
    const settings = await this.settings.fetch();
    return {
      settings,
    };
  }
}
