import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;

  handleURL(url) {
    const urlWithoutExtension = url.slice(0, -5);
    super.handleURL(urlWithoutExtension);
  }
}

Router.map(function () {
  this.route("options");
  this.route("not-found", { path: "*" });
});
