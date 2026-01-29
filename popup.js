document.getElementById('start').addEventListener('click', () => {
  // Create an alarm to run every 0.16 minutes (approx 10 seconds)
  // Note: Chrome alarms have a minimum of 1 minute in some versions, 
  // but for "unpacked" developer extensions, it usually allows shorter.
  chrome.alarms.create("randomNav", { periodInMinutes: 0.16 });
  document.getElementById('status').innerText = "Running in background...";
});

document.getElementById('stop').addEventListener('click', () => {
  chrome.alarms.clear("randomNav");
  document.getElementById('status').innerText = "Stopped.";
});
