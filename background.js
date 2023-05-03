
let oldPage = 'notayoutubepagelmao';
chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    
    if (details.url.indexOf("chrome://") === -1 && details.url.includes('youtube.com') && !details.url.includes('&themeRefresh=1') && (!details.url.includes(oldPage.replace("&themeRefresh=1","").replace("https://www.youtube.com","") ))) {
        oldPage=details.url;
    
        chrome.tabs.executeScript(details.tabId, { file: "content.js" }, function() {    
            console.log(oldPage);
        });
    }
  });

  
