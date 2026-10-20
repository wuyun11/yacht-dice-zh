// Collect the notices supplied with the packages used by the Windows build.
// Run after a desktop build: node scripts/collect-notices.mjs <CARGO_HOME> [Rust documentation directory]
import {readFileSync,writeFileSync,mkdirSync,readdirSync,copyFileSync,existsSync} from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import {createHash} from 'node:crypto';
const root=path.resolve(import.meta.dirname,'..');
const cargoHome=process.argv[2]||process.env.CARGO_HOME||path.join(os.homedir(),'.cargo');
const rustDocs=process.argv[3];
const directory=path.join(root,'vendor','licenses');
mkdirSync(directory,{recursive:true});
const rows=[];
function copyNotices(source,destination,depth=0){
  let copied=0;
  for(const entry of readdirSync(source,{withFileTypes:true})){
    const from=path.join(source,entry.name),to=path.join(destination,entry.name);
    if(entry.isFile()&&/^(licen[cs]e|copying|copyright|notice)(?:[._-]|$)/i.test(entry.name)){
      mkdirSync(destination,{recursive:true});copyFileSync(from,to);copied++;
    }else if(entry.isDirectory()&&depth<1&&/^(licenses?|legal)$/i.test(entry.name)) copied+=copyNotices(from,to,depth+1);
  }return copied;
}
for(const name of ['react','react-dom','scheduler']){
  const source=path.join(root,'node_modules',name),pkg=JSON.parse(readFileSync(path.join(source,'package.json'),'utf8'));
  const dest=`vendor/licenses/npm/${name}`;
  rows.push({kind:'JavaScript',name,version:pkg.version,license:pkg.license,source:`https://www.npmjs.com/package/${name}/v/${pkg.version}`,notices:copyNotices(source,path.join(root,dest)),dest});
}
const builtPackages=new Set();
for(const file of readdirSync(path.join(root,'src-tauri','target','release','deps')).filter(name=>name.endsWith('.d'))){
  const content=readFileSync(path.join(root,'src-tauri','target','release','deps',file),'utf8');
  for(const match of content.matchAll(/registry[\\/]src[\\/][^\\/\s]+[\\/]([^\\/\s]+)/g)) builtPackages.add(match[1]);
}
for(const registry of readdirSync(path.join(cargoHome,'registry','src'))){
  for(const folder of readdirSync(path.join(cargoHome,'registry','src',registry))){
    if(!builtPackages.has(folder))continue;
    const source=path.join(cargoHome,'registry','src',registry,folder),manifest=readFileSync(path.join(source,'Cargo.toml'),'utf8');
    const property=name=>manifest.match(new RegExp(`^${name}\\s*=\\s*"([^"\\n]+)"`,'m'))?.[1];
    const name=property('name'),version=property('version'),license=property('license')||'参见附带许可';
    const dest=`vendor/licenses/rust/${folder}`;
    let notices=copyNotices(source,path.join(root,dest));
    // Some crates omit a license file from their published archive. Keep the
    // upstream repository license retrieved alongside this build when present.
    if(!notices&&existsSync(path.join(root,dest)))notices=readdirSync(path.join(root,dest)).filter(name=>/^(LICENSE|NOTICE)/i.test(name)).length;
    rows.push({kind:'Rust',name,version,license,source:`https://crates.io/crates/${name}/${version}`,notices,dest});
  }
}
if(rustDocs){
  const dest=path.join(directory,'rust-standard-library');mkdirSync(dest,{recursive:true});
  copyFileSync(path.join(rustDocs,'COPYRIGHT-library.html'),path.join(dest,'COPYRIGHT-library.html'));
  const source=path.join(rustDocs,'licenses');mkdirSync(path.join(dest,'licenses'),{recursive:true});
  for(const file of readdirSync(source))copyFileSync(path.join(source,file),path.join(dest,'licenses',file));
}
const dataHash=createHash('sha256').update(readFileSync(path.join(root,'public','yacht_exp.bin'))).digest('hex');
rows.sort((a,b)=>a.kind.localeCompare(b.kind)||a.name.localeCompare(b.name));
const text=`# 来源与第三方许可\n\n## 上游项目\n\n本项目是 [Smooth Pudding / yacht-evaluator-api](https://github.com/mat-der-D/yacht-evaluator-api) 的中文离线改编。求解方法、计分表状态编码和预计算策略文件来自该项目。上游版权为 **Copyright (c) 2025 Smooth Pudding**，采用 MIT 许可；完整文本保留在 [vendor/upstream-LICENSE](vendor/upstream-LICENSE)。\n\n本版的主要改动是重做中文界面、将服务端求解迁移为本机 Web Worker、采用有界的当前局面缓存，并加入局面保存、导入导出、撤销、练习模式和 Tauri 桌面打包。本仓库的 MIT 许可不替代第三方组件自身的许可。\n\n策略文件 public/yacht_exp.bin 的 SHA-256：\n\n\`${dataHash}\`\n\n参考的上游提交：[5f6370689fe797fc4570e4fdeb531310987a7b0e](https://github.com/mat-der-D/yacht-evaluator-api/tree/5f6370689fe797fc4570e4fdeb531310987a7b0e)。原版网页界面可参见 [yacht-evaluator-web](https://github.com/mat-der-D/yacht-evaluator-web)。\n\n## 依赖组件\n\n下表由本次 Windows 构建使用的 JavaScript 运行依赖和 Rust 编译依赖生成（Rust 列表包含构建工具）。各包随附的 LICENSE、COPYING、COPYRIGHT、NOTICE 文件保留在 vendor/licenses 中。依赖源码未作修改，可从各包的来源链接按指定版本获取。许可字段中有多种可选许可时，以其完整许可文本为准。\n\n| 组件 | 版本 | 许可声明 | 来源与附带声明 |\n| --- | --- | --- | --- |\n${rows.map(r=>`| ${r.name} | ${r.version} | ${r.license} | [源码](${r.source})${r.notices?` · [许可文件](${r.dest})`:' · 包未附带独立许可文件，参见源码'} |`).join('\n')}\n\n## Rust 标准库\n\n标准库版权与许可清单保留在 [vendor/licenses/rust-standard-library/COPYRIGHT-library.html](vendor/licenses/rust-standard-library/COPYRIGHT-library.html)，其引用的许可文本位于同目录 licenses 子目录。该清单沿用 Rust 工具链提供的原文。\n\n本文件只整理来源与随包提供的声明；软件按各自许可的条款提供。更新依赖后应重新生成本文件和随包声明。\n`;
writeFileSync(path.join(root,'THIRD_PARTY_NOTICES.md'),text);
console.log(JSON.stringify({packages:rows.length,withoutNoticeFile:rows.filter(r=>!r.notices).map(r=>r.name),dataHash}));
