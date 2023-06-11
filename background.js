// let portFromCS;

// browser.runtime.onConnect.addListener((p) => {
//     portFromCS = p;
//     portFromCS.postMessage({ cmd: "bg", content: list[getRandomInt(list.length)] });
//     portFromCS.onMessage.addListener((m) => {
//         console.log(m);
//     portFromCS.postMessage({
//         cmd: "test",
//         content: "testcontent"
//     });
//     });
// });


// browser.action.onClicked.addListener(() => {
//     browser.tabs.query({ url: browser.runtime.getURL("index.html") }).then((tabs) => {
//         for (const tab of tabs) {
//             browser.tabs.update(tab.id, { 'active': true });
//             return;
//         }
//         browser.tabs.create({ 'url': browser.runtime.getURL("index.html") }, function(tab) {});
//     }, (error) => {
//         console.error(`Error: ${error}`);
//     });
// });


// browser.runtime.onInstalled.addListener((event) => {
//     if (event.reason === 'install') {
//         browser.tabs.create({ 'url': browser.runtime.getURL("index.html") }, function(tab) {});
//         browser.tabs.query({}).then((tabs) => {
//             for (const tab of tabs) {
//                 if (tab.url == "") { // "favorites://"
//                     browser.tabs.update(tab.id, { 'url': browser.runtime.getURL("index.html") });
//                 }
//             }
//         }, (error) => {
//             console.error(`Error: ${error}`);
//         });
//     }
// });

// on url changed:
// browser.webNavigation.onCompleted.addListener((details) => {
//     if (details.frameId !== 0) {
//         return;
//     }
//     addURL(details.url);
// });


// function save() {
//     browser.storage.local.set({ "DATA": [1,2,3] }).then(() => {
//         console.log("Saved");
//     }, (error) => {
//         console.log(error);
//     });
// }


// function load() {
//     browser.storage.local.get("DATA").then((d) => {
//         if (!d.DATA) {
//             return [];
//         }
//         data = d.DATA || [];
//     }, (error) => {
//         console.log(error);
//     });
// }


// browser.tabs.onUpdated.addListener((tabId, changeInfo, tabInfo) => {
//     if (changeInfo.status == "complete") {
//         save();
//     }
// });

// function reset() {
//     browser.storage.local.clear();
// }

// load();