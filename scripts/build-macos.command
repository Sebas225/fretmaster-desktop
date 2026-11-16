#!/bin/bash
set -e
cd "$(dirname "$0")/.."
echo "==============================================================="
echo "  FretMaster Studio - Generador de Instalador macOS (.dmg)"
echo "==============================================================="
if ! command -v node >/dev/null 2>&1; then
  echo "[!] Instala Node.js LTS desde https://nodejs.org y vuelve a ejecutar este script."
  read -p "Presiona Enter para cerrar..."
  exit 1
fi
npm install
npm run dist:mac
echo "[OK] Instalador Universal (.dmg) generado en dist/"
open dist
