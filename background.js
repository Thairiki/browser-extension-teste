const API = chrome || browser

API.tabs.onUpdated.addListener( async (tabId, changeInfo, tab) => {
  if (changeInfo.status == 'complete' && tab.active) {
    await API.scripting
    .executeScript({
      target: { tabId, allFrames: true },
      files: [ "/js/injectButton.js" ]
    })
    .then(() => console.log("script injected in all frames"))
    .catch(err => console.error(`failed to inject content scripts: ${err}`))
  }
})
