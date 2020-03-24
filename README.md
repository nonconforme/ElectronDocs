![Logo](https://cdn.rawgit.com/Vista1nik/ThunderDocs/5b58d421/assets/icons/web/320x320.png)
## ElectronDocs ##
[![Build Status](https://travis-ci.org/nonconforme/ElectronDocs.svg?branch=master)](https://travis-ci.org/nonconforme/ElectronDocs)
 ![Github All Releases](https://img.shields.io/github/downloads/Vista1nik/GDocs/total.svg)
 ![Electron Version](https://img.shields.io/badge/Electron-1.8.4-brightgreen.svg)
 
Unofficial Google Docs desktop application

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
