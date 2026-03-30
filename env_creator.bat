@echo off
echo 📝 ULTIMATEUNBLOCKER - Environment Creator
echo =======================================

echo.
echo 🔧 This script will create your .env file using .env.example as template
echo.

:: Check if .env.example exists
if not exist ".env.example" (
    echo ❌ Error: .env.example file not found!
    echo 📋 Please create .env.example file first.
    pause
    exit /b 1
)

:: Check if .env already exists
if exist ".env" (
    echo ⚠️  .env file already exists!
    echo.
    echo Choose an option:
    echo 1. Replace existing .env file
    echo 2. Create new .env file with number ^(e.g., .env2, .env3^)
    echo.
    set /p choice=Enter your choice ^(1 or 2^): 
    
    if "%choice%"=="1" (
        echo 🔄 Replacing existing .env file...
        set env_file=.env
        goto :continue_setup
    ) else if "%choice%"=="2" (
        echo 📝 Creating new numbered .env file...
        goto :create_numbered
    ) else (
        echo ❌ Invalid choice. Exiting.
        pause
        exit /b 1
    )
) else (
    set env_file=.env
    echo ✅ Creating new .env file...
    goto :continue_setup
)

:create_numbered
:: Find next available number
set counter=2
:check_number
if exist ".env%counter%" (
    set /a counter+=1
    goto check_number
)
set env_file=.env%counter%
echo 📝 Creating new .env file: %env_file%

:continue_setup

echo ✅ Found .env.example template
echo.

:: Open API key pages
echo 🔐 Opening API key pages for you...
echo 📥 Please get your API keys from these pages:
echo.

:: OpenRouter
echo 1️⃣ OpenRouter API Keys:
start https://openrouter.ai/workspaces/default/keys
echo    📋 Copy your API key
pause

:: HuggingFace
echo 2️⃣ HuggingFace Tokens:
start https://huggingface.co/settings/tokens
echo    📋 Copy your access token
pause

:: Replicate
echo 3️⃣ Replicate API Tokens:
start https://replicate.com/account/api-tokens
echo    📋 Copy your API token
pause

:: LockLLM
echo 4️⃣ LockLLM Dashboard:
start https://www.lockllm.com/dashboard
echo    📋 Copy your API key
pause

:: Ask for API keys
echo.
echo 📝 Please enter your API keys:
echo.

set /p API=Enter your OpenRouter API key: 
set /p API2=Enter your HuggingFace API key: 
set /p API3=Enter your Replicate API key: 
set /p API4=Enter your LockLLM API key: 

:: Ask for project name
echo.
set /p PROJECT_NAME=Enter your project name (default: ULTIMATEUNBLOCKER): 
if "%PROJECT_NAME%"=="" set PROJECT_NAME=ULTIMATEUNBLOCKER

:: Create the .env file with API keys
echo 📝 Creating %env_file% file from template...
echo.

:: Create the .env file with API keys
(
echo # %PROJECT_NAME% Environment Variables
echo.
echo # API Keys ^(Simple Format^)
echo API=%API%
echo API2=%API2%
echo API3=%API3%
echo API4=%API4%
echo.
echo # Server Configuration
echo PORT=3000
echo NODE_ENV=production
echo DEBUG=false
echo.
echo # Discord Integration
echo DISCORD_SERVER_ID=1487910769776394343
echo DISCORD_CHANNEL_ID=1487951675057508444
echo DISCORD_INVITE_URL=https://discord.gg/PpbddfffVT
echo.
echo # Database ^(Optional^)
echo DATABASE_URL=mongodb://localhost:27017/ultimateunblocker
echo REDIS_URL=redis://localhost:6379
echo.
echo # Security
echo JWT_SECRET=your_jwt_secret_here_change_this
echo ENCRYPTION_KEY=your_encryption_key_here_change_this
echo.
echo # Features
echo ENABLE_AI=true
echo ENABLE_PROXY=true
echo ENABLE_CHAT=true
echo ENABLE_GAMING=true
echo.
echo # Performance
echo CACHE_TTL=3600
echo RATE_LIMIT=100
echo MAX_CONNECTIONS=1000
) > %env_file%

echo ✅ %env_file% file created successfully!
echo 📁 File saved as: %env_file%
echo 🚀 Ready for deployment!
echo.
echo 📋 Next steps:
echo 1. Run vercel_deployment.bat to deploy
echo 2. Or use complete_setup.bat for full process
echo.
pause
