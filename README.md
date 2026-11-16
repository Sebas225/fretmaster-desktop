# FretMaster & Keys Studio — Arquitectura de Escritorio (macOS y Windows)

Proyecto nativo de escritorio sobre **Electron 33** diseñado bajo principios de **Clean Architecture** y separación estricta de responsabilidades (100% autónomo offline, sin dependencias de CDN en tiempo de ejecución).

## Estructura del Proyecto

```text
fretmaster-desktop/
├── electron/
│   ├── main.js                   # Ciclo de vida, ventana principal y políticas de seguridad
│   ├── menu.js                   # Menú nativo para macOS y Windows desacoplado
│   └── preload.js                # Puente IPC seguro (contextIsolation: true, sandbox: true)
├── src/
│   ├── index.html                # Documento semántico limpio
│   ├── styles/
│   │   ├── tokens-and-theme.css  # Design tokens (:root), texturas y animaciones
│   │   └── utilities.css         # Utilidades atómicas compiladas para ejecución offline
│   └── js/
│       ├── core/                 # Capa de Dominio puro (sin acceso al DOM)
│       │   ├── constants.js      # Afinación EADGBE, intervalos y catálogo de 22 cualidades
│       │   ├── theory.js         # Enarmonía, frecuencias MIDI y digitación ergonómica
│       │   ├── voicings.js       # Generador algorítmico (CAGED, Tríadas, Spread, Drop 2/3)
│       │   ├── scales.js         # Pentatónicas mayores/menores y las 5 cajas CAGED
│       │   └── detector.js       # Motor de reconocimiento armónico inverso en tiempo real
│       ├── audio/
│       │   └── synth-engine.js   # Síntesis polifónica Web Audio API (Guitarra y Piano)
│       ├── state/
│       │   └── store.js          # Estado centralizado y selectores derivados
│       ├── ui/                   # Vistas desacopladas
│       │   ├── fretboard-view.js # Renderizado del mástil de 22 trastes (Horizontal/Vertical)
│       │   ├── piano-view.js     # Renderizado del piano sincronizado
│       │   └── controls-view.js  # Selectores, carrusel de posiciones y banner en vivo
│       ├── platform/
│       │   └── platform-bridge.js# Atajos de teclado, IPC y respuesta adaptativa
│       └── app.js                # Controlador principal e inicialización
├── assets/                       # Iconos nativos (.icns macOS, .ico Windows, .png 1024px)
├── scripts/                      # Scripts automatizados de compilación en 1 clic
└── .github/workflows/            # CI/CD para compilar Mac y Windows en paralelo en la nube
```

## Cómo generar los instaladores

- **En Windows (`.exe` Instalador NSIS + `.exe` Portable)**: ejecuta `scripts/build-windows.bat` (o `npm install && npm run dist:win`).
- **En macOS (`.dmg` Universal Intel + Apple Silicon)**: ejecuta `scripts/build-macos.command` (o `npm install && npm run dist:mac`).
- **Compilación cruzada automática (ambos sistemas a la vez)**: sube el proyecto a GitHub y ejecuta el flujo en la pestaña **Actions** (`Release Desktop`) para descargar tanto el `.dmg` de Mac como el `.exe` de Windows ya compilados.
- **Ejecución directa sin compilar**: abre `src/index.html` directamente en cualquier navegador de Mac o Windows.
