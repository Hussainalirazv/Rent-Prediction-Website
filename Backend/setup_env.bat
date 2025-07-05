@echo off
SET ENV_NAME=rentenv
SET PYTHON_VERSION=3.10

echo -------------------------------
echo Checking for Python %PYTHON_VERSION%
echo -------------------------------

where python >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
    echo ❌ Python not found. Please install Python %PYTHON_VERSION% from https://www.python.org/downloads/release/python-3109/
    pause
    exit /b
)

for /f "delims=" %%i in ('python --version') do set CURRENT_PYTHON=%%i
echo Current Python Version: %CURRENT_PYTHON%

REM Create virtual environment
echo -------------------------------
echo Creating virtual environment: %ENV_NAME%
echo -------------------------------
python -m venv %ENV_NAME%

REM Activate virtual environment
echo -------------------------------
echo Activating environment...
echo -------------------------------
call %ENV_NAME%\Scripts\activate.bat

REM Upgrade pip and install packages
echo -------------------------------
echo Installing packages...
echo -------------------------------
pip install --upgrade pip setuptools wheel
pip install tensorflow flask flask-cors scikit-learn pandas numpy joblib

echo -------------------------------
echo ✅ Setup Complete!
echo To activate manually later: call %ENV_NAME%\Scripts\activate.bat
echo -------------------------------

pause
