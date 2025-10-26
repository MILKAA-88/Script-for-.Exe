const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'icon.ico'),
    webPreferences: {
      nodeIntegration: false, // Attention ! Ne changez pas, si vous mettez "true", vous vous exposez à des failles de sécurité (voir README)
      contextIsolation: true, // Même chose
      preload: path.join(__dirname, 'preload.js'), // Fichier pour exposer des API de manière sécurisée
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
