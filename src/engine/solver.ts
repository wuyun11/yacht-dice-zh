// Adapted from Smooth Pudding's MIT-licensed yacht-evaluator-api.
// Uses the same scorecard state encoding, exact backward induction and bundled data.
import {CATEGORIES,countsOf,scoreCounts,totalScore,upperTotal,validateSheet,type Category,type ScoreSheet} from './rules.ts';
export type Choice = {type:'keep';dice:number[];expected:number} | {type:'score';category:Category;points:number;expected:number};
type Pattern={counts:number[];dice:number[];size:number;prob:number};
const factorial=[1,1,2,6,24,120];
function hash(c:readonly number[]):number {return c.reduce((s,n)=>s*6+n,0);}
function patterns(n:number):Pattern[]{
  const result:Pattern[]=[];
  const walk=(counts:number[],left:number)=>{
    if(counts.length===5){const c=[...counts,left];result.push({counts:c,size:n,dice:c.flatMap((v,i)=>Array(v).fill(i+1)),prob:factorial[n]/(6**n*c.reduce((p,v)=>p*factorial[v],1))});return;}
    for(let k=0;k<=left;k++) walk([...counts,k],left-k);
  };walk([],n);return result;
}
const ALL=Array.from({length:6},(_,n)=>patterns(n));
const FULL=ALL[5];
const PARTIAL=ALL.flat();
const FULL_INDEX=new Map(FULL.map((p,i)=>[hash(p.counts),i]));
const SUBSETS=FULL.map(p=>PARTIAL.map((k,i)=>({k,i})).filter(({k})=>k.counts.every((n,j)=>n<=p.counts[j])).map(x=>x.i));
const TRANSITIONS=PARTIAL.map(k=>ALL[5-k.size].map(r=>({index:FULL_INDEX.get(hash(k.counts.map((v,i)=>v+r.counts[i])))!,prob:r.prob})));
const SCORES=FULL.map(p=>CATEGORIES.map((_,c)=>scoreCounts(c,p.counts)));

export function crc32(bytes:Uint8Array):number {
  const table=new Uint32Array(256);
  for(let i=0;i<256;i++){let v=i;for(let j=0;j<8;j++) v=(v&1)?0xedb88320^(v>>>1):v>>>1;table[i]=v>>>0;}
  let crc=0xffffffff;for(const b of bytes) crc=table[(crc^b)&255]^(crc>>>8);return (crc^0xffffffff)>>>0;
}
export class Solver {
  private readonly values: Float64Array;
  private lastKey='';
  private layers: {final:Float64Array;one:Float64Array;two:Float64Array}|null=null;
  constructor(buffer:ArrayBuffer){
    const header=new DataView(buffer);
    if(buffer.byteLength<32 || new TextDecoder().decode(new Uint8Array(buffer,0,10))!=='YACHT_EVAL') throw new Error('策略数据格式错误');
    const count=header.getUint32(16,true);
    if(count!==262144 || buffer.byteLength!==32+count*8 || crc32(new Uint8Array(buffer,32))!==header.getUint32(20,true)) throw new Error('策略数据校验失败，请重新获取完整程序');
    this.values=new Float64Array(count);for(let i=0;i<count;i++) this.values[i]=header.getFloat64(32+i*8,true);
    if(!Number.isFinite(this.values[0])) throw new Error('策略数据无效');
  }
  get initialExpected():number{return this.values[0];}
  private maskOf(sheet:ScoreSheet):number {return CATEGORIES.reduce((m,c,i)=>sheet[c]===null?m:m|(1<<i),0);}
  private nextValue(mask:number,upper:number,c:number,points:number):number {
    const nextUpper=c<6?Math.min(63,upper+points):upper;
    return points+(upper<63 && nextUpper===63?35:0)+this.values[((mask|(1<<c))<<6)|nextUpper];
  }
  private buildLayers(mask:number,upper:number){
    const key=`${mask}:${upper}`;if(key===this.lastKey && this.layers) return this.layers;
    const final=Float64Array.from(SCORES,row=>Math.max(...row.map((s,c)=>mask&(1<<c)?-Infinity:this.nextValue(mask,upper,c,s))));
    const advance=(input:Float64Array)=>Float64Array.from(TRANSITIONS,row=>row.reduce((s,t)=>s+t.prob*input[t.index],0));
    const one=advance(final);
    const afterOne=Float64Array.from(SUBSETS,subset=>Math.max(...subset.map(i=>one[i])));
    const two=advance(afterOne);
    this.lastKey=key;return this.layers={final,one,two};
  }
  evaluate(sheet:ScoreSheet,dice:number[],roll:1|2|3):Choice[]{
    if(!validateSheet(sheet)) throw new Error('计分表中有无效分数');
    if(![1,2,3].includes(roll)) throw new Error('请选择第 1、2 或 3 掷');
    const counts=countsOf(dice),mask=this.maskOf(sheet);
    if(mask===4095) return [];
    const upper=Math.min(63,upperTotal(sheet)),base=totalScore(sheet);
    const layers=this.buildLayers(mask,upper),choices:Choice[]=[];
    const index=FULL_INDEX.get(hash(counts))!;
    if(roll<3){const values=roll===1?layers.two:layers.one;for(const i of SUBSETS[index]){const p=PARTIAL[i];if(p.size<5) choices.push({type:'keep',dice:p.dice,expected:base+values[i]});}}
    CATEGORIES.forEach((category,c)=>{if(!(mask&(1<<c))){const points=SCORES[index][c];choices.push({type:'score',category,points,expected:base+this.nextValue(mask,upper,c,points)});}});
    return choices.sort((a,b)=>b.expected-a.expected || (a.type==='score'?-1:1));
  }
}
