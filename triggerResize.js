window.onload = function resize() {
    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    var eventer = window[eventMethod];
    var messageEvent = eventMethod === "attachEvent" ? "onmessage" : "message";

    // Listen to message from contained widgets. they will post messages to their parent (this) window
    eventer(messageEvent, function(e) {
        var message;
        try {
            message = JSON.parse(e.data);
        } catch (error) {
            message = null;
        }
        if (message) {
            if (message.action) {
                switch (message.action) {
                    case 'gns.resizeIframe':
                        triggerResize();
                        break;
                    case 'gns.mobileResizeIframe':
                        triggerResize();
                        break;
                    case 'gns.resizeIFrame':
                        triggerResize();
                }
            }
        }
    }, false);

};

function triggerResize() {
    var body = document.body;
    var height = body.scrollHeight;
    var width = body.scrollWidth;
    if (window.parent) {
        window.parent.postMessage(JSON.stringify({
            action: 'resizeIframe',
            height: height,
            width: width,
        }), '*');
    }
}
