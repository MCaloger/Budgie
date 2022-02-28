const { app, BrowserWindow, protocol } = require('electron');
const path = require('path')


const createWindow = () => {
    const window = new BrowserWindow({ webPreferences: {
        nodeIntegration: true,
      },});

    window.loadURL(`file://${path.join(__dirname, "/build/index.html")}`);

    
}

app.whenReady().then(() => {

    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  })