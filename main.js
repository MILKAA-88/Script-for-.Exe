const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'icon.ico'),
    webPreferences: {
      nodeIntegration: false, // Warning! Do not change, if you put "true", you expose yourself to security flaws (see README)
      contextIsolation: true, // Same thing
      preload: path.join(__dirname, 'preload.js'), // File to expose APIs in a secure way
    },
  });

  win.setMenuBarVisibility(false); // Hide the menu bar
  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // Recreate a window if none is open (macOS)
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  // Exit the app when all windows are closed (except macOS)
  if (process.platform !== 'darwin') app.quit();
});
