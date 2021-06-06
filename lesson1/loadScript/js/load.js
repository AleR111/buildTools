let index = 0;
function counter() {
    index++
}

function loadScript(url, callback = null) {
    if (typeof url === 'string') {
        const element = document.createElement("script");
        element.type = "text/javascript";
        element.src = url;
        if(!callback) {
            element.onload = counter;
        } else element.onload = callback;
        document.body.appendChild(element);
    } else if (Array.isArray(url)) {
        url.forEach(elem => loadScript(elem));
       const check = setInterval(() => {
            if (index === url.length) {
                callback()
                index = 0
                clearInterval(check)
            }
        })
    }
}

