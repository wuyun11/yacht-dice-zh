param([string]$RustTools='')
$ErrorActionPreference='Stop'
Set-Location -LiteralPath (Split-Path -Parent $PSScriptRoot)
if ($RustTools) {
  $env:CARGO_HOME=Join-Path $RustTools 'cargo'
  $env:RUSTUP_HOME=Join-Path $RustTools 'rustup'
  $env:PATH="$env:CARGO_HOME\bin;$env:PATH"
}
if (-not (Get-Command cargo -ErrorAction SilentlyContinue)) { throw '构建桌面版需要 Rust 和 Visual C++ 构建工具。请参阅 README。' }
npm run build
if($LASTEXITCODE -ne 0){throw '前端构建失败'}
cargo build --release --locked --manifest-path src-tauri/Cargo.toml
if($LASTEXITCODE -ne 0){throw '桌面构建失败'}
New-Item -ItemType Directory -Path release -Force | Out-Null
Copy-Item -LiteralPath 'src-tauri\target\release\yacht-dice-zh.exe' -Destination 'release\快艇骰子策略助手.exe' -Force
& (Join-Path $PSScriptRoot 'package-release.ps1')
Write-Output '已生成 release\快艇骰子策略助手.exe'
