/**
 * @fileoverview Construcción modular de la barra de menús nativa para macOS y Windows.
 */
'use strict';

const { Menu } = require('electron');

function createApplicationMenu(app, sendCommand) {
  const isMac = process.platform === 'darwin';

  const template = [
    ...(isMac ? [{
      label: app.name,
      submenu: [
        { role: 'about', label: 'Acerca de FretMaster Studio' },
        { type: 'separator' },
        { role: 'hide', label: 'Ocultar' },
        { role: 'hideOthers', label: 'Ocultar otros' },
        { role: 'unhide', label: 'Mostrar todo' },
        { type: 'separator' },
        { role: 'quit', label: 'Salir de FretMaster Studio' }
      ]
    }] : []),
    {
      label: 'Modos',
      submenu: [
        { label: 'Acordes y Voicings', accelerator: '1', click: () => sendCommand('mode-chords') },
        { label: 'Escalas Pentatónicas', accelerator: '2', click: () => sendCommand('mode-scales') },
        { label: 'Detector Armónico Libre', accelerator: '3', click: () => sendCommand('mode-detector') },
        { type: 'separator' },
        ...(isMac ? [{ role: 'close', label: 'Cerrar ventana' }] : [{ role: 'quit', label: 'Salir' }])
      ]
    },
    {
      label: 'Instrumento',
      submenu: [
        { label: 'Solo Guitarra (22 trastes)', accelerator: 'G', click: () => sendCommand('inst-guitar') },
        { label: 'Solo Piano', accelerator: 'P', click: () => sendCommand('inst-piano') },
        { label: 'Vista Sincronizada (Ambos)', accelerator: 'B', click: () => sendCommand('inst-both') },
        { type: 'separator' },
        { label: 'Etiquetas: Notas (C, D, E)', accelerator: 'N', click: () => sendCommand('label-note') },
        { label: 'Etiquetas: Intervalos (1, 3, 5)', accelerator: 'I', click: () => sendCommand('label-interval') },
        { label: 'Etiquetas: Dedos (1-4)', accelerator: 'D', click: () => sendCommand('label-finger') }
      ]
    },
    {
      label: 'Reproducción',
      submenu: [
        { label: 'Rasguear / Tocar Acorde o Escala', accelerator: 'Space', click: () => sendCommand('strum') },
        { label: 'Arpegiar', accelerator: 'A', click: () => sendCommand('arpeggio') },
        { type: 'separator' },
        { label: 'Posición Anterior', accelerator: 'Left', click: () => sendCommand('prev') },
        { label: 'Siguiente Posición', accelerator: 'Right', click: () => sendCommand('next') },
        { type: 'separator' },
        { label: 'Silenciar / Activar Audio', accelerator: 'M', click: () => sendCommand('toggle-mute') }
      ]
    },
    {
      label: 'Vista',
      submenu: [
        { label: 'Alternar Mástil Horizontal / Vertical', accelerator: 'V', click: () => sendCommand('toggle-vertical') },
        { type: 'separator' },
        { role: 'resetZoom', label: 'Tamaño real' },
        { role: 'zoomIn', label: 'Acercar' },
        { role: 'zoomOut', label: 'Alejar' },
        { type: 'separator' },
        { role: 'togglefullscreen', label: 'Pantalla completa' }
      ]
    }
  ];

  return Menu.buildFromTemplate(template);
}

module.exports = { createApplicationMenu };
