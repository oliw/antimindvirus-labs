import {filterSite} from "./content";

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("Received a message!");
  console.log(
    sender.tab
      ? "from a content script:" + sender.tab.url
      : "from the extension"
  );
  console.log(request);
  sendResponse();
});

filterSite();
