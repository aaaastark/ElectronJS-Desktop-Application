const button_2 = document.getElementById("Google__Menu_2")
button_2.addEventListener("click", () => {
    createBrowserWindow()
})

function createBrowserWindow() {
    const remote = require("electron").remote
    const BrowserWindow = remote.BrowserWindow;
    const app = remote.app;
    const win = new BrowserWindow({
        width: 1450,
        height: 900,
        icon: __dirname + "./hassan.ico",
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    })
    win.removeMenu(true)
    win.on("close", function () {
        win = null
    })
    
    win.loadURL(
        "https://www.google.com/search?q=aaaa+stark&oq=aa&aqs=chrome.0.69i59j69i57j69i59l2j69i60l3j69i65.596j0j7&sourceid=chrome&ie=UTF-8");

    win.once("ready-to-show", () => {
        win.show()
    })
    // Quit when all windows are closed, except on macOS. There, it's common
    // for applications and their menu bar to stay active until the user quits
    // explicitly with Cmd + Q.
    app.on("window-all-closed", () => {
        if (process.platform !== "darwin") {
            app.quit()
        }
    })

    app.on("activate", () => {
        // On OS X it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
}
