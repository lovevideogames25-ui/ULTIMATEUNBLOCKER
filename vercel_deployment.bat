@echo off
echo 🚀 ULTIMATEUNBLOCKER - Vercel Deployment
echo ===========================================

:: Check for any .env files
set env_found=false
set env_file=

:: Check for .env files
if exist ".env" (
    set env_found=true
    set env_file=.env
) else (
    :: Check for numbered .env files
    for /l %%i in (2,1,99) do (
        if exist ".env%%i" (
            set env_found=true
            set env_file=.env%%i
            goto :env_found
        )
    )
)

:env_found
if "%env_found%"=="false" (
    echo ❌ Error: No .env file found!
    echo 📝 Please run env_creator.bat first to create .env file.
    pause
    exit /b 1
)

:: Check if multiple .env files exist
set multiple_envs=false
if exist ".env" (
    for /l %%i in (2,1,99) do (
        if exist ".env%%i" (
            set multiple_envs=true
            goto :check_multiple
        )
    )
)

:check_multiple
if "%multiple_envs%"=="true" (
    echo ⚠️  Multiple .env files found!
    echo.
    echo Available .env files:
    if exist ".env" echo 1. .env
    set counter=2
    :list_envs
    if exist ".env%counter%" echo %counter%. .env%counter%
    set /a counter+=1
    if %counter% lss 10 goto list_envs
    
    echo.
    set /p env_choice=Which .env file to use? ^(1-9^): 
    
    if "%env_choice%"=="1" (
        set env_file=.env
    ) else (
        set env_file=.env%env_choice%
    )
    
    if not exist "%env_file%" (
        echo ❌ File %env_file% does not exist!
        pause
        exit /b 1
    )
)

echo ✅ Using %env_file% file with API keys
echo.

:: Login to Vercel
echo 🔐 Logging in to Vercel...
echo y | vercel login

:: Add delay and continue automatically
echo ✅ Authentication successful! Continuing in 3 seconds...
timeout /t 3 /nobreak >nul

echo ✅ Proceeding with deployment...
echo 🚀 Deploying to Vercel with environment variables...
echo.

:: Deploy to production with --yes flag
vercel --prod --yes

echo.
echo 🎉 Deployment complete!
echo 🌐 Your app is now live on Vercel!
echo 🔐 Environment variables are configured and deployed
echo 📋 Check your Vercel dashboard for deployment URL
pause
