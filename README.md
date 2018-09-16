![Logo]()
## ThunderDocs ##
[![Build Status](https://travis-ci.org/Vista1nik/ThunderDocs.svg?branch=master)](https://travis-ci.org/Vista1nik/ThunderDocs)
 ![Github All Releases](https://img.shields.io/github/downloads/Vista1nik/GDocs/total.svg)
 ![Electron Version](https://img.shields.io/badge/Electron-1.8.4-brightgreen.svg)
 
Unofficial Google Docs desktop app

### Screenshot
![](https://i.imgur.com/VDSb9gd.png)

## Building and Running ##

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
