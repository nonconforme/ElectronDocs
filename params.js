// Parametrs Worker for GDocs
// 

// On redirect to Another URL Open Default Browser


   self.addEventListener('message',  e => {
    let win = e.data;
    win.webContents.on('new-window', (event, url) => {
    event.preventDefault()
     if ( url.includes("docs.google.com") != true ) {
        require('electron').shell.openExternal(url)
     }
   })
})

