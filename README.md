![Logo](https://cdn.rawgit.com/Vista1nik/GDocs/49cb3d76/assets/icons/web/312x312.png)
## ThunderDocs ##
[![Build Status](https://travis-ci.org/Vista1nik/ThunderDocs.svg?branch=master)](https://travis-ci.org/Vista1nik/ThunderDocs)
 ![Github All Releases](https://img.shields.io/github/downloads/Vista1nik/GDocs/total.svg)
 
Unofficial Google Docs desktop app

### Screenshot
![](https://raw.githubusercontent.com/Vista1nik/vista1nik.github.io/master/gdocs/assets/images/gdocs-screenshot-833x634.png)


**Run:**
 

    npm install
    electron .

**Build:**

    npm install
    npm install electron-packager --save-dev
 Windows:
 

    electron-packager . --overwrite --platform=win32 --arch=x64 --icon=assets/icons/win/icon.ico
  macOS:
  

    electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns
   Linux:
   

    electron-packager . --overwrite --platform=linux --arch=x64 --icon=assets/icons/png/1024x1024.png
