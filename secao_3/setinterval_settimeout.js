const timer = setInterval(function () {
    console.log('Oi, tudo bem?');
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 10000);
