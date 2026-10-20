$ErrorActionPreference='Stop'
$project=Split-Path -Parent $PSScriptRoot
$release=Join-Path $project 'release'
if(-not(Test-Path -LiteralPath (Join-Path $release '快艇骰子策略助手.exe'))){throw '未找到桌面程序，请先完成桌面构建'}
Copy-Item -LiteralPath (Join-Path $project 'LICENSE') -Destination (Join-Path $release 'LICENSE.txt') -Force
Copy-Item -LiteralPath (Join-Path $project 'THIRD_PARTY_NOTICES.md') -Destination (Join-Path $release 'THIRD_PARTY_NOTICES.md') -Force
New-Item -ItemType Directory -Path (Join-Path $release 'vendor') -Force | Out-Null
Copy-Item -LiteralPath (Join-Path $project 'vendor\upstream-LICENSE') -Destination (Join-Path $release 'vendor\upstream-LICENSE') -Force
Copy-Item -LiteralPath (Join-Path $project 'vendor\licenses') -Destination (Join-Path $release 'vendor') -Recurse -Force
# Some dependency packages use epoch timestamps, outside the ZIP date range.
$zipMinDate=Get-Date -Year 1980 -Month 1 -Day 2 -Hour 0 -Minute 0 -Second 0
$zipMaxDate=Get-Date -Year 2107 -Month 12 -Day 30 -Hour 23 -Minute 59 -Second 58
Get-ChildItem -LiteralPath $release -Recurse -File | ForEach-Object {
  if ($_.LastWriteTime -lt $zipMinDate) { $_.LastWriteTime=$zipMinDate }
  elseif ($_.LastWriteTime -gt $zipMaxDate) { $_.LastWriteTime=$zipMaxDate }
}
$items=Get-ChildItem -LiteralPath $release | Where-Object { $_.Extension -ne '.zip' } | Select-Object -ExpandProperty FullName
Compress-Archive -LiteralPath $items -DestinationPath (Join-Path $release '快艇骰子策略助手-Windows.zip') -Force
Write-Output 'Windows 便携包已生成，包含程序、使用说明及第三方许可声明。'
