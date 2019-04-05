const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
//const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')


let win;

function createWindow() {

  win = new BrowserWindow({ width: 800, height: 600, fullscreen: true })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'template2\\pages\\index.html'),
    protocol: 'file:',
    slashes: true
  }));

  let server = require('../frontend/template2/js/general.js')


  win.on('closed', () => {
    win = null
  });
}

app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
