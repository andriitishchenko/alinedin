let myPort = browser.runtime.connect({ name: "port-from-cs" });
myPort.postMessage({ cmd: "test" });

myPort.onMessage.addListener((m) => {
    let cmd = m.cmd;
    let content = m.content;
    switch (cmd) {
        case "test":
            console.log(m);
            break;
        default:
    }
});


window.onload = function() {
    console.log("Hello world");
}