const electron = require('electron')
const { app, BrowserWindow ,ipcMain } = electron
// var ipc = require('ipc')
require('electron-reload')(__dirname);
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize
  win = new BrowserWindow({
    width, height,
    fullscreenable :false,
    minWidth:738 , minHeight: 563,
  //  transparent:true, ۵۶۳×۷۳۸
    webPreferences: {
      nodeIntegration: true
      // ,devTools: false
    }
  })
  win.maximize() 
  win.setResizable(false)
  // and load the index.html of the app.
  win.loadFile('index.html')

  // Open the DevTools.
  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready',() => setTimeout(createWindow, 100))

ipcMain.on('reload', (event, arg) => {
  win.reload()
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
