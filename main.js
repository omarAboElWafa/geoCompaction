console.log("main process is working");
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');


let win;

function createWindow() {
  win = new BrowserWindow({
      width: 800,
      height: 600,
      icon: __dirname+'/img/icon.jpg',
      webPreferences: {
        nodeIntegration: true
      }
  });
  win.loadURL(url.format({
    pathname :path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }));

win.webContents.openDevTools();
  win.on('closed', () => {
    win = null;
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', ( ()=> {
  if (process.platform !== 'darwin') {
    app.quit()
  }
}));

app.on('activate', () =>{
  if (win === null) {
    createWindow()
  }
});





// const electron = require('electron')
// const app = electron.app
//
// const BrowserWindow = electron.BrowserWindow
//
// let mainWindow
//
// function createWindow() {
//   mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     icon: __dirname+'/img/icon.jpg',
//     webPreferences: {
//       nodeIntegration: true
//     }
//   })
//
//   mainWindow.loadURL(`file://${__dirname}/index.html`)
//
//   mainWindow.webContents.openDevTools()
//
//   mainWindow.on('closed', function() {
//     mainWindow = null
//   })
// }
//
// app.on('ready', createWindow)
//
// app.on('window-all-closed', function() {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })
//
// app.on('activate', function() {
//   if (mainWindow === null) {
//     createWindow()
//   }
// })
