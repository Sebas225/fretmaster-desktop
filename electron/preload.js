/**
 * @fileoverview Puente IPC seguro con aislamiento de contexto (contextIsolation: true).
 */
'use strict';

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('desktopBridge', Object.freeze({
  isDesktopApp: true,
  platform: process.platform,
  onMenuCommand: (callback) => {
    if (typeof callback !== 'function') return;
    ipcRenderer.on('menu-command', (_event, cmd) => callback(cmd));
  }
}));
