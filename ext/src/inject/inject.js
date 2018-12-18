function incCountMsg() {
    chrome.storage.sync.get(['count'], (result) => {
    	if (result.count != undefined) {
            chrome.storage.sync.set({count: result.count + 1})
		} else {
            chrome.storage.sync.set({count: 1})
		}
		console.log("test")
    });
}

let maybeCheckButt = Array.from(document.getElementsByClassName("btn-primary")).filter(butt => butt.innerHTML == "Done Checking")
if (maybeCheckButt.length > 0) {
	checkButt = maybeCheckButt[0]
	checkButt.addEventListener("click", () => incCountMsg()	)
}