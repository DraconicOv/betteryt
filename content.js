var videoUrl = window.location.href;
console.log('asdas');
if (window.location.href.includes("watch") && !window.location.href.includes("&themeRefresh=1")) {
  videoUrl += "&themeRefresh=1";
  window.history.replaceState(null, null, videoUrl);
  location.reload();
}