const Worker = (callbackFcn) => {
    if (window.Worker) {
        const ticker = new window.Worker('./ticker.js');

        ticker.onmessage = (e) => {
            console.log(e);
        };
    }
}

export default Worker;
