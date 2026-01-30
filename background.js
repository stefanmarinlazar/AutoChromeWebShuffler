chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "randomNav") {
    const randomizers = [
      "https://en.wikipedia.org/wiki/Special:Random",
      "https://en.m.wiktionary.org/wiki/Special:Random"
    ];

    const service = randomizers[Math.floor(Math.random() * randomizers.length)];
    const finalUrl = service + (service.includes('?') ? `&t=${Date.now()}` : `?t=${Date.now()}`);

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.update(tabs[0].id, {url: finalUrl});
      }
    });
  }
});
