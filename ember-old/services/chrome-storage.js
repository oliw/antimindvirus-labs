/* global google */
import Service from "@ember/service";

export default class ChromeStorageService extends Service {
  async set(key, value) {
    return new Promise((resolve, reject) => {
      chrome.storage.local.set({ [key]: value }, function () {
        resolve();
      });
    });
  }

  async get(key) {
    return new Promise((resolve, reject) => {
      chrome.storage.local.get(key, function (result) {
        console.log(`Looking for ${key}`);
        console.log(result);
        resolve(result[key]);
      });
    });
  }
}
