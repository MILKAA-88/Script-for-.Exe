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

  win.setMenuBarVisibility(false); // Cache la barre de menu
  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // Recrée une fenêtre si aucune n’est ouverte (macOS)
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  // Quitte l'app quand toutes les fenêtres sont fermées (sauf macOS)
  if (process.platform !== 'darwin') app.quit();
});
