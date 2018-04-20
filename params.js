// Parametrs Worker for GDocs
// 

// On redirect to Another URL Open Default Browser


   self.addEventListener('message',  e => {
    let win = e.data;
    win.webContents.on('new-window', (event, url) => {
    event.preventDefault()
     if ( url.includes("docs.google.com") ) {
         let CleanURL = url.replace("https://", "")
       
         // DON'T WORK
       createDocsWindow(CleanURL);
     } else {
      require('electron').shell.openExternal(url)
    }
   })
})

