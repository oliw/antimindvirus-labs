const DEFAULT_SETTINGS = {
  allDisabled: false,
  questionsBlurring: {
    enabled: false,
  },
  entryTakeover: {
    enabled: false,
  },
  greyscale: {
    enabled: false,
  },
  badSites: ["theguardian.com"],
};

const SETTINGS_KEY = "settings";

function isFeatureEnabled(feature) {
  const settings = fetchSettings();
  return false;
}

export async function store(settings) {
  return set(SETTINGS_KEY, settings);
}

export async function fetchSettings() {
  const settings = await get(SETTINGS_KEY);
  return {
    ...DEFAULT_SETTINGS,
    ...settings,
  };
}

async function set(key, value) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set({[key]: value}, function() {
      resolve();
    });
  });
}

async function get(key) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(key, function(result) {
      console.log(`Looking for ${key}`);
      console.log(result);
      resolve(result[key]);
    });
  });
}
