'use strict';

var app            = require('app'),
		browserWindow  = require('browser-window'),
		globalShortcut = require('global-shortcut'),
		mainWindow     = null;

app.on('window-all-closed', function () {
	if (process.platform != 'darwin') {
		app.quit();
	}
});

app.on('ready', function () {
	mainWindow = new browserWindow({
		width             : 1280,
		height            : 720,
		'title'           : 'Brain.fm',
		webSecurity       : false,
		'node-integration': false
	});

	mainWindow.setMenu(null);
	mainWindow.loadURL('http://brain.fm');
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
	globalShortcut.register('MediaStop', function () {playPause();}); // ?
	globalShortcut.register('MediaPlayPause', function () {playPause();});
	//globalShortcut.register('MediaPreviousTrack', function() {});

	mainWindow.on('closed', function () {
		mainWindow = null;
	});
});


function skip() {
	if (mainWindow == null) {
		return;
	}
	// todo
}

function playPause() {
	if (mainWindow == null) {
		return;
	}

	mainWindow.webContents.executeJavaScript('' +
		'if ($("#play_button").hasClass("tc_pause")) {' +
		'$("#jquery_jplayer").jPlayer("play", 0);' +
		'$("#play_button").removeClass("tc_pause").addClass("tc_play");' +
		'} else {' +
		'$("#jquery_jplayer").jPlayer("play", 1);' +
		'$("#play_button").removeClass("tc_play").addClass("tc_pause");' +
		'}'
	);
}



