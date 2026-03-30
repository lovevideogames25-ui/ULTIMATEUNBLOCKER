@echo off
title ULTIMATEUNBLOCKER - Local Deployment
color 0A
echo.
echo ========================================
echo   ULTIMATEUNBLOCKER - Local Deployment
echo ========================================
echo.
echo 🚀 This script will:
echo    1. Clone the GitHub repository
echo    2. Install Node.js dependencies
echo    3. Install Nodemon and other tools
echo    4. Start the development server
echo.
echo ========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git is not installed or not in PATH
    echo 📥 Please install Git first: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed or not in PATH
    echo 📥 Please install Node.js first: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Git and Node.js are installed
echo.

REM Remove existing directory if it exists
if exist "ULTIMATEUNBLOCKER" (
    echo 🗑️  Removing existing ULTIMATEUNBLOCKER directory...
    rmdir /s /q ULTIMATEUNBLOCKER
)

echo 📥 Cloning ULTIMATEUNBLOCKER repository...
git clone https://github.com/lovevideogames25-ui/ULTIMATEUNBLOCKER.git

if %errorlevel% neq 0 (
    echo ❌ Failed to clone repository
    pause
    exit /b 1
)

echo ✅ Repository cloned successfully
echo.

echo 📍 Changing to ULTIMATEUNBLOCKER directory...
cd ULTIMATEUNBLOCKER
if %errorlevel% neq 0 (
    echo ❌ Failed to enter ULTIMATEUNBLOCKER directory
    pause
    exit /b 1
)

echo ✅ Now in ULTIMATEUNBLOCKER directory
echo.

echo 📦 Installing Node.js dependencies...
call npm install

if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

echo ✅ Dependencies installed successfully
echo.

REM Check if .env file exists
if not exist ".env" (
    echo ⚠️  WARNING: No .env file found!
    echo.
    echo 🔐 The AI system requires API keys to function properly.
    echo 📝 Please run env_creator.bat to set up your API keys:
    echo.
    echo    📋 Steps:
    echo    1. Run: env_creator.bat
    echo    2. Get API keys from OpenRouter, HuggingFace, Replicate, LockLLM
    echo    3. Enter your API tokens when prompted
    echo    4. Choose to replace or create new .env file
    echo    5. Run this script again
    echo.
    echo 🚫 Without .env, the AI features will not work!
    echo.
    set /p continue=Do you want to continue anyway? (y/n): 
    if /i not "%continue%"=="y" (
        echo 📝 Please run env_creator.bat first
        pause
        exit /b 1
    )
) else (
    echo ✅ .env file found - AI features ready!
    echo.
)

echo � Copying server files from current directory...
if exist "..\simple-server.js" (
    copy "..\simple-server.js" ".\simple-server.js"
    echo ✅ Copied simple-server.js
) else (
    echo ❌ simple-server.js not found in parent directory
    echo 📁 Looking in current directory...
    if exist "simple-server.js" (
        echo ✅ Found simple-server.js in current directory
    ) else (
        echo ❌ simple-server.js not found anywhere
        echo 📋 Available files:
        dir /b *.js *.py *.html
    )
)

if exist "..\.env" (
    copy "..\.env" ".\.env"
    echo ✅ Copied .env file
)

echo.
echo �🔧 Installing Nodemon globally...
call npm install -g nodemon

if %errorlevel% neq 0 (
    echo ⚠️  Nodemon installation failed, but continuing...
    echo 📦 Will use local nodemon instead
)

echo 🔧 Installing additional development tools...
call npm install --save-dev nodemon concurrently

if %errorlevel% neq 0 (
    echo ⚠️  Some tools failed to install, but continuing...
)

echo.
echo ========================================
echo 🚀 STARTING DEVELOPMENT SERVER
echo ========================================
echo.
echo 🌐 Server will start on http://localhost:3000
echo 🔄 Nodemon will auto-restart on file changes
echo 📝 Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

REM Ignore npm run dev (runs Python) and run Node.js server directly
echo 🎯 Starting Node.js server directly (ignoring broken npm run dev)...
node simple-server.js

pause
