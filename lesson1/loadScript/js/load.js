function loadScript(url, callback = null) {
    if (typeof url === 'string') {
        const element = document.createElement("script");
        element.type = "text/javascript";
        element.src = url;
        element.onload = callback;
        document.body.appendChild(element);
    } else if (Array.isArray(url)) {
        url.forEach(elem=> loadScript(elem));
        callback()
    }
}

// loadScript(["js/common.js", 'ascsac.js'], () => {
//     loadScript("https://cdn.jsdelivr.net/npm/luxon@1.25.0/build/global/luxon.min.js", () => {
//         console.log("timer.js ")
//     })
// })

// let index = 0
// if(index < url.length) {
//     index++;
//     const element = document.createElement("script");
//     element.type = "text/javascript";
//     element.src = loadScript(url[index]);
//     element.onload = callback;
//     document.body.appendChild(element);
// } callback()
