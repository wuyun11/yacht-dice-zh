import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import './build.mjs';
const root=fileURLToPath(new URL('../dist/',import.meta.url));
const types={'.html':'text/html; charset=utf-8','.js':'application/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.bin':'application/octet-stream','.txt':'text/plain; charset=utf-8'};
const server=createServer(async(req,res)=>{try{const raw=decodeURIComponent(new URL(req.url,'http://localhost').pathname);const requested=path.resolve(root,`.${raw==='/'?'/index.html':raw}`);if(!requested.startsWith(root))throw new Error();const info=await stat(requested);if(!info.isFile())throw new Error();res.writeHead(200,{'Content-Type':types[path.extname(requested)]||'application/octet-stream','Cache-Control':'no-store'});res.end(await readFile(requested));}catch{res.writeHead(404);res.end('Not Found');}});
server.listen(Number(process.env.PORT||4173),'127.0.0.1',()=>console.log(`快艇骰子：http://127.0.0.1:${server.address().port}`));
