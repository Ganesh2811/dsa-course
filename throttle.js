// function executes within a fixed time interval.

function throttle(fn, delay) {
    let lastTime = 0;
    return function (...args) {
        let now = Date.now();
        if (now - lastTime >= delay) {
            fn.apply(this, args);
            lastTime = now;
        }
    };
}

function printMessage() {
    console.log("Function executed at", new Date().toLocaleTimeString());
}

const throttledPrint = throttle(printMessage, 1000);

setInterval(throttledPrint, 200);