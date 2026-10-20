import {build} from 'esbuild';
import {mkdir,copyFile,readdir} from 'node:fs/promises';
await mkdir('dist',{recursive:true});
await Promise.all([
  build({entryPoints:['src/main.tsx'],outfile:'dist/app.js',bundle:true,minify:true,format:'esm',target:['es2022'],jsx:'automatic',define:{'process.env.NODE_ENV':'"production"'},legalComments:'eof'}),
  build({entryPoints:['src/worker.ts'],outfile:'dist/worker.js',bundle:true,minify:true,format:'esm',target:['es2022'],legalComments:'eof'})
]);
await copyFile('index.html','dist/index.html');
for(const name of await readdir('public')) await copyFile(`public/${name}`,`dist/${name}`);
await copyFile('vendor/upstream-LICENSE','dist/upstream-LICENSE.txt');
console.log('离线资源已生成：dist/');
