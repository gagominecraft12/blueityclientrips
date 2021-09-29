if not exist node.exe goto error

if exist node.exe goto success1

title Blue'ity Client - Error - Development Version

@echo off && cls

ping -n 4 127.0.0.1

:error
echo Can't Find Node? Checking Node If It Was Dectected

ping -n 4 127.0.0.1

where node.exe

ping -n 4 127.0.0.1

echo It ain't found. **** YOU N***A

ping -n 4 127.0.0.1

exit

:success1

echo Finding Node

where node.exe

echo Finally Found!

pause