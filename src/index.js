const { app} = require('electron');
const path = require('path');
const url = require('url');
const {createWindow} = require('./main.js');


app.on('ready', () => {
  if (process.platform === 'win32') {
    app.setAppUserModelId("AAAA STARK DESKTOP APPLICATION");
  }
  createWindow();
});

app.allowRendererProcessReuse = false;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
