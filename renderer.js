// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { remote } = require('electron')
const mainProcess = remote.require('./main');
const { BrowserWindow } = remote;

const popupwin = (targeturl) => {  // Create the browser window.
    mainWindow = new BrowserWindow({titleBarStyle: 'hiddenInset', width: 800, height: 600})
  
    // and load the index.html of the app.
    mainWindow.loadFile('index.html')
  
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
       mainWindow.webContents.executeJavaScript("document.querySelector('webview').setAttribute('src','" + targeturl + "')", () => {
         console.log("INFO: another document opened")
       })
    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null
    })}

const webview = document.querySelector('webview')
  webview.addEventListener('new-window', (e) => {
     // if user click link...
     event.preventDefault()
     if ( e.url.includes("docs.google.com") ) {
      popupwin(e.url)
     } else {
      require('electron').shell.openExternal(e.url)
    }
  })