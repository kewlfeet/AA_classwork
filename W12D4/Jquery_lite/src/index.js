const DOMNodeCollection = require('./dom_node_collection');
document.functions = [];

const $l = function(arg) {
    if (typeof(arg) === "string") {
        const nodeList = document.querySelectorAll(arg);
        return new DOMNodeCollection(Array.from(nodeList));
    } else if (arg instanceof HTMLElement) {
        return new DOMNodeCollection([arg]);
    } else if (arg instanceof Function) {
        if (document.readyState === 'complete') {
            arg.call();
        }else{
            document.functions.push(arg)
            if (!document.listenerSet === true) {
                document.addEventListener("DOMContentLoaded" , function() {
                    // alert("the document is ready")
                    document.functions.forEach(func => {
                        func.call();
                    });
                });
            }
            document.listenerSet = true;
        }
    }
}

window.$l = $l;

