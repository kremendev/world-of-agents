@echo off
title WoA Blender runner - close this window to stop it
set "B="
for /d %%D in ("C:\Program Files\Blender Foundation\Blender*") do if exist "%%D\blender.exe" set "B=%%D\blender.exe"
if not defined B if exist "C:\Program Files (x86)\Steam\steamapps\common\Blender\blender.exe" set "B=C:\Program Files (x86)\Steam\steamapps\common\Blender\blender.exe"
if not defined B (
  echo Could not find blender.exe. Open this file in Notepad and put your Blender path on the line: set "B=..."
  pause
  exit /b 1
)
echo Using %B%
echo Blender runs in the background. You can minimise this window and keep working.
"%B%" -b --python "%~dp0woa_watch.py"
pause
