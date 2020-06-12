chrome.webNavigation.onBeforeNavigate.addListener((info) => {
  if (info.frameId === 0) {
    messageCurrentTab({
      type: "page-load",
      details: {
        url: info.url,
      },
    });
  }
});

function messageCurrentTab(messageObj) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, messageObj, function(response) {
      console.log(response);
    });
  });
}
