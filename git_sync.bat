@echo off
echo Starting Git operations...

echo Step 1: Checking out all files to keep local versions...
git checkout --ours .
if %errorlevel% neq 0 (
    echo Error checking out files
    pause
    exit /b 1
)

echo Step 2: Adding all files...
git add .
if %errorlevel% neq 0 (
    echo Error adding files
    pause
    exit /b 1
)

echo Step 3: Committing changes...
git commit -m "Resolve merge conflicts - keep local changes"
if %errorlevel% neq 0 (
    echo Error committing changes
    pause
    exit /b 1
)

echo Step 4: Pulling from remote...
git pull origin main --allow-unrelated-histories
if %errorlevel% neq 0 (
    echo Error pulling from remote
    pause
    exit /b 1
)

echo Step 5: Checking out files again to keep local versions...
git checkout --ours .
if %errorlevel% neq 0 (
    echo Error checking out files after pull
    pause
    exit /b 1
)

echo Step 6: Adding all files again...
git add .
if %errorlevel% neq 0 (
    echo Error adding files after pull
    pause
    exit /b 1
)

echo Step 7: Committing merge resolution...
git commit -m "Resolve merge conflicts - keep local changes"
if %errorlevel% neq 0 (
    echo Error committing merge resolution
    pause
    exit /b 1
)

echo Step 8: Pushing to remote...
git push origin main
if %errorlevel% neq 0 (
    echo Error pushing to remote
    pause
    exit /b 1
)

echo All Git operations completed successfully!
pause
