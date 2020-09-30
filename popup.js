function injectTheScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: "badoo.js"});
    });
}
document.getElementById('btn_submit_badoo').addEventListener('click', injectTheScript);



			
function injectTheScript2() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {file: "tinder.js"});
    });
}
document.getElementById('btn_submit_tinder').addEventListener('click', injectTheScript2);


	
      
 