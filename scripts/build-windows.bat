@echo off
chcp 65001 >nul
cd /d "%~dp0.."
title FretMaster Studio - Build Windows (.EXE)
echo ===============================================================
echo   FretMaster Studio - Generador de Instalador Windows (.exe)
echo ===============================================================
where node >nul 2>nul
if %errorlevel% neq 0 (
  echo [!] Instala Node.js LTS desde https://nodejs.org y vuelve a ejecutar este script.
  pause
  exit /b 1
)
call npm install || exit /b 1
call npm run dist:win || exit /b 1
echo.
echo [OK] Ejecutables generados en la carpeta "dist".
explorer dist
pause
