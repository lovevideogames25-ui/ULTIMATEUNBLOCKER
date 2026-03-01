@echo off
echo Pushing to remote...
git push origin main
if %errorlevel% neq 0 (
    echo Error pushing to remote
    pause
    exit /b 1
)
echo Push completed successfully!
pause
