'use strict';

var app            = require('app'),
    browserWindow  = require('browser-window'),
    globalShortcut = require('global-shortcut'),
    Menu           = require('menu'),
    mainWindow     = null;

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function () {
  mainWindow = new browserWindow({
    width             : 960,
    height            : 450,
    'title'           : 'Brain.fm',
    webSecurity       : false,
    'node-integration': false
  });

  mainWindow.setMenu(null);
  mainWindow.loadURL('http://brain.fm/app');
  //mainWindow.webContents.openDevTools();

  mainWindow.on('app-command', function (e, cmd) {
    if (cmd === 'browser-backward' && mainWindow.webContents.canGoBack()) {
      mainWindow.webContents.goBack();
    }
    else if (cmd === 'browser-forward' && mainWindow.webContents.canGoForward()) {
      mainWindow.webContents.goForward();
    }
  });

  // Global shortcuts..
  globalShortcut.register('MediaNextTrack', function () {skip();});
  globalShortcut.register('MediaPlayPause', function () {playPause();});
  //globalShortcut.register('MediaPreviousTrack', function() {});

  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  // Create the Application's main menu
  var template = [{
      label: app.getName(),
      submenu: [
        { label: "About Brain.fm", selector: "orderFrontStandardAboutPanel:" },
        { type: "separator" },
        { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
      ]}, {
      label: "Edit",
      submenu: [
        { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
        { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
      ]}
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
});


function skip() {
  if (mainWindow == null) {
    return;
  }
  mainWindow.webContents.executeJavaScript('$("#skip_button").click()');
}

function playPause() {
  if (mainWindow == null) {
    return;
  }

  mainWindow.webContents.executeJavaScript('$("#play_button").click()');
}
