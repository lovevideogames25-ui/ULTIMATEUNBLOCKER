@echo off
setlocal enabledelayedexpansion

echo CHECKOUTING FILES
git checkout --ours . >nul 2>&1
if %errorlevel% neq 0 (
    echo error (checkout failed)
    exit /b
)

echo ADDING FILES
git add . >nul 2>&1
if %errorlevel% neq 0 (
    echo error (add failed)
    exit /b
)

echo COMMITING FILES
git commit -m "Complete update - CHANGELOG.md, documentation, and all project files" >nul 2>&1
if %errorlevel% neq 0 (
    echo error (commit failed or nothing to commit)
    exit /b
)

echo PUSHING FILESD
git push origin main >nul 2>&1
if %errorlevel% neq 0 (
    echo error (push failed)
    exit /b
)

exit