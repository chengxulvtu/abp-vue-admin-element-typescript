@echo off
cls
chcp 65001

echo. 启动平台管理服务

cd .\platform\LINGYUN.Platform.HttpApi.Host

if '%1' equ '--publish' goto publish
if '%1' equ '--run' goto run
if '%1' equ '--restore' goto restore
if '%1' equ '--ef-u' goto efu
if '%1' equ '' goto run
exit

:publish
dotnet publish -c Release -o ..\..\Publish\platform --no-cache --no-restore
copy Dockerfile ..\..\Publish\platform\Dockerfile
exit

:run
dotnet run 
exit

:restore
dotnet restore
exit

:efu
dotnet ef databse update
exit