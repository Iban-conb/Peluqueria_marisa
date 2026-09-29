; Instalador de Peluquería Marisa (NSIS, compilado en Linux con makensis nativo)
;
; Comportamiento equivalente al instalador electron-builder de la v1.0.0:
;  - Instalación por usuario (perMachine=false): %LOCALAPPDATA%\Programs\PeluqueriaMarisa
;  - oneClick: instala y arranca la app al terminar
;  - Accesos directos en escritorio y menú Inicio
;  - Desinstalador que NO borra los datos del salón (%APPDATA%\peluqueria-marisa)
;  - Actualización in situ: si hay una versión previa, ejecuta su
;    desinstalador en silencio antes de copiar los archivos nuevos.

Unicode true
!include "MUI2.nsh"

!define APP_NAME "PeluqueriaMarisa"
!define APP_TITLE "Peluquería Marisa"
!define APP_VERSION "1.1.0"
!define APP_ID "com.peluqueriamarisa.app"

Name "${APP_TITLE} ${APP_VERSION}"
OutFile "dist\PeluqueriaMarisa-Setup-${APP_VERSION}.exe"
InstallDir "$LOCALAPPDATA\Programs\PeluqueriaMarisa"
InstallDirRegKey HKCU "Software\PeluqueriaMarisa" "InstallDir"
RequestExecutionLevel user
SetCompressor /SOLID lzma
AutoCloseWindow true

!define MUI_ICON "dist\.icon-ico\icon.ico"
!define MUI_UNICON "dist\.icon-ico\icon.ico"
!define MUI_LANGDLL_ALLLANGUAGES
!insertmacro MUI_PAGE_INSTFILES
!insertmacro MUI_UNPAGE_CONFIRM
!insertmacro MUI_UNPAGE_INSTFILES
!insertmacro MUI_LANGUAGE "Spanish"

; Cierra la app si está en ejecución (sin plugins: taskkill del sistema)
!macro CerrarApp
  ExecWait "taskkill /F /IM ${APP_NAME}.exe"
  Sleep 800
!macroend

Section "Instalar"
  ; 1. Parar la app si estuviera abierta
  !insertmacro CerrarApp

  ; 2. Actualización in situ: si existe el desinstalador de una versión
  ;    anterior (electron-builder), se ejecuta en silencio primero. No
  ;    borra los datos del salón, solo archivos y accesos directos viejos.
  IfFileExists "$INSTDIR\Uninstall ${APP_NAME}.exe" 0 saltoDesinstalar
    DetailPrint "Actualizando desde la versión anterior…"
    ExecWait '"$INSTDIR\Uninstall ${APP_NAME}.exe" /S _?=$INSTDIR'
    Sleep 800
  saltoDesinstalar:

  ; 3. Copiar la aplicación completa
  SetOutPath "$INSTDIR"
  File /r "dist\win-unpacked\*.*"
  WriteUninstaller "$INSTDIR\Uninstall ${APP_NAME}.exe"

  ; 4. Accesos directos (contexto del usuario actual)
  SetShellVarContext current
  CreateDirectory "$SMPROGRAMS\Peluquería Marisa"
  CreateShortCut "$SMPROGRAMS\Peluquería Marisa\Peluquería Marisa.lnk" "$INSTDIR\${APP_NAME}.exe"
  CreateShortCut "$DESKTOP\Peluquería Marisa.lnk" "$INSTDIR\${APP_NAME}.exe"

  ; 5. Registro de desinstalación (Agregación o quitar programas)
  WriteRegStr HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\${APP_ID}" "DisplayName" "${APP_TITLE}"
  WriteRegStr HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\${APP_ID}" "DisplayVersion" "${APP_VERSION}"
  WriteRegStr HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\${APP_ID}" "Publisher" "Peluquería Marisa"
  WriteRegStr HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\${APP_ID}" "DisplayIcon" "$INSTDIR\${APP_NAME}.exe"
  WriteRegStr HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\${APP_ID}" "UninstallString" '"$INSTDIR\Uninstall ${APP_NAME}.exe"'
  WriteRegStr HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\${APP_ID}" "QuietUninstallString" '"$INSTDIR\Uninstall ${APP_NAME}.exe" /S'
  WriteRegDWORD HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\${APP_ID}" "NoModify" 1
  WriteRegDWORD HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\${APP_ID}" "NoRepair" 1
  WriteRegDWORD HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\${APP_ID}" "EstimatedSize" 0x0005A000
  WriteRegStr HKCU "Software\PeluqueriaMarisa" "InstallDir" $INSTDIR
SectionEnd

Section "Uninstall"
  !insertmacro CerrarApp
  SetShellVarContext current
  Delete "$DESKTOP\Peluquería Marisa.lnk"
  Delete "$SMPROGRAMS\Peluquería Marisa\Peluquería Marisa.lnk"
  RMDir "$SMPROGRAMS\Peluquería Marisa"
  RMDir /r "$INSTDIR"
  DeleteRegKey HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\${APP_ID}"
  DeleteRegKey HKCU "Software\PeluqueriaMarisa"
  ; Los datos del salón (%APPDATA%\peluqueria-marisa) se conservan SIEMPRE
SectionEnd

; Arrancar la app al terminar la instalación (como la v1.0.0)
Function .onInstSuccess
  IfSilent +2
    Exec '"$INSTDIR\${APP_NAME}.exe"'
FunctionEnd
