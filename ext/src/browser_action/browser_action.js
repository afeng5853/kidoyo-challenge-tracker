let countButt = document.getElementById("count");
chrome.storage.sync.get(['count'], (result) => {
    if (result.count !== undefined) {
        countButt.value = result.count
    } else {
        countButt.value = 0
    }
    countButt.style.width = (((countButt.value.length + 1) * 10)) + 'px'
});

countButt.addEventListener("input", () => {
    countButt.style.width = ((countButt.value.length + 1) * 10) + 'px'
    chrome.storage.sync.set({count: parseInt(countButt.value)});
});