import {Solver} from './engine/solver.ts';
let solver:Solver|null=null;
const scope=globalThis as unknown as DedicatedWorkerGlobalScope;
scope.onmessage=async(event:MessageEvent)=>{
  const {id,type,...payload}=event.data;
  try{
    if(type==='init'){
      const response=await fetch(new URL('./yacht_exp.bin',import.meta.url));
      if(!response.ok) throw new Error('无法读取本地策略数据');
      solver=new Solver(await response.arrayBuffer());
      scope.postMessage({type:'ready',initialExpected:solver.initialExpected});return;
    }
    if(!solver) throw new Error('策略数据尚未加载');
    const start=performance.now();
    const choices=solver.evaluate(payload.sheet,payload.dice,payload.roll);
    scope.postMessage({type:'result',id,choices,elapsed:performance.now()-start});
  }catch(error){scope.postMessage({type:'error',id,message:error instanceof Error?error.message:'计算失败'});}
};
