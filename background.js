const API = chrome || browser

try {
  await API.scripting
    .registerContentScripts([{
      id: "session-script",
      js: ["/js/injectButton.js"],
      persistAcrossSessions: false,
      matches: ["<all_urls>"],
      runAt: "document_start",
    }])
    .then(() => console.log("registration complete"))

} catch (err) {
  console.error(`failed to register content scripts: ${err}`)
}

// API.scripting
// .updateContentScripts([{
//   id: "session-script",
//   excludeMatches: ["*://admin.example.com/*"],
// }])
// .then(() => console.log("registration updated"))

// API.scripting
//   .getRegisteredContentScripts()
//   .then(scripts => console.log("registered content scripts", scripts))

// API.scripting
//   .unregisterContentScripts({ ids: ["session-script"] })
//   .then(() => console.log("un-registration complete"));


// API.runtime.onInstalled.addListener(() => {
//   API.action.setBadgeText({
//     text: "OFF",
//   });
// });

// const extensions = 'https://developer.chrome.com/docs/extensions'
// const webstore = 'https://developer.chrome.com/docs/webstore'

// API.action.onClicked.addListener(async (tab) => {
//   if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {
//     // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
//     const prevState = await API.action.getBadgeText({ tabId: tab.id });
//     // Next state will always be the opposite
//     const nextState = prevState === 'ON' ? 'OFF' : 'ON'

//     // Set the action badge to the next state
//     await API.action.setBadgeText({
//       tabId: tab.id,
//       text: nextState,
//     })

//     if (nextState === "ON") {
//       // Insert the CSS file when the user turns the extension on
//       await API.scripting.insertCSS({
//         files: ["./css/focus-mode.css"],
//         target: { tabId: tab.id },
//       });
//     } else if (nextState === "OFF") {
//       // Remove the CSS file when the user turns the extension off
//       await API.scripting.removeCSS({
//         files: ["./css/focus-mode.css"],
//         target: { tabId: tab.id },
//       });
//     }
//   }
// })
