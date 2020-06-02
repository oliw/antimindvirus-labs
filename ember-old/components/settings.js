import Component from "@glimmer/component";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class SettingsComponent extends Component {
  @service settingsStore;

  @action
  save() {
    const settings = this.args.settings;
    this.settingsStore.store(settings).then(() => {
      console.log("Saved!");
    });
  }
}
