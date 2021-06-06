let _index = 0;
let _buffer = [];

function loadScript(url, callback = null) {
    if (typeof url === 'string') {
        if (!_findInBuffer(url)) _loadArgString(url, callback);
    } else if (Array.isArray(url)) _loadArgArray(url, callback);
}

function _counter() {
    _index++;
}

function _loadArgString(url, callback) {
    _buffer.push(url);
    const element = document.createElement("script");
    element.type = "text/javascript";
    element.src = url;

    if (!callback) {
        element.onload = _counter;
    } else element.onload = callback;

    document.body.appendChild(element);
}

function _loadArgArray(url, callback) {
    url.forEach(elem => loadScript(elem));

    const check = setInterval(() => {
        if (_index === url.length) {
            callback();
            _index = 0;
            clearInterval(check);
        }
    })
}

function _findInBuffer(url) {
    return _buffer.find(elem => elem === url);
}

