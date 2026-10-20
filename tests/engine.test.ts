import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {CATEGORIES,emptySheet,scoreDice,bonus,totalScore,validScores,type ScoreSheet} from '../src/engine/rules.ts';
import {Solver} from '../src/engine/solver.ts';
const bytes=readFileSync(new URL('../public/yacht_exp.bin',import.meta.url));
const solver=new Solver(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength));
test('Switch 计分：五同可填葫芦，顺子 15/30，没有重复快艇奖励',()=>{
  assert.equal(scoreDice('fullHouse',[6,6,6,6,6]),30);
  assert.equal(scoreDice('fullHouse',[6,6,6,5,5]),28);
  assert.equal(scoreDice('fullHouse',[6,6,6,6,5]),0);
  assert.equal(scoreDice('fourOfAKind',[2,2,2,2,6]),14);
  assert.equal(scoreDice('smallStraight',[1,2,3,4,4]),15);
  assert.equal(scoreDice('bigStraight',[2,3,4,5,6]),30);
  const sheet={...emptySheet(),yacht:50,six:30};assert.equal(totalScore(sheet),80);
});
test('所有 7776 种骰子逐项计分，并检验分析录入允许的分数集合',()=>{
  const observed=CATEGORIES.map(()=>new Set([0]));observed[6].delete(0);
  for(let encoded=0;encoded<7776;encoded++){
    let n=encoded;const d=Array.from({length:5},()=>{const value=n%6+1;n=Math.floor(n/6);return value;});
    const groups=[...new Set(d)].map(value=>d.filter(x=>x===value).length).sort();
    const sum=d.reduce((a,b)=>a+b,0),set=new Set(d);
    const expected=[...Array.from({length:6},(_,i)=>d.filter(x=>x===i+1).length*(i+1)),sum,groups.some(c=>c>=4)?sum:0,['2,3','5'].includes(groups.join(','))?sum:0,[1,2,3].some(a=>[a,a+1,a+2,a+3].every(x=>set.has(x)))?15:0,[1,2].some(a=>[a,a+1,a+2,a+3,a+4].every(x=>set.has(x)))?30:0,groups.length===1?50:0];
    CATEGORIES.forEach((c,i)=>{const score=scoreDice(c,d);assert.equal(score,expected[i]);observed[i].add(score);});
  }
  CATEGORIES.forEach((c,i)=>assert.deepEqual(validScores(c),[...observed[i]].sort((a,b)=>a-b)));
});
test('数据完整性：损坏文件必须报错',()=>{
  const corrupt=bytes.slice();corrupt[100]^=1;
  assert.throws(()=>new Solver(corrupt.buffer.slice(corrupt.byteOffset,corrupt.byteOffset+corrupt.byteLength)),/校验失败/);
  assert.ok(Math.abs(solver.initialExpected-191.77436918834195)<1e-10);
});
test('只剩一个上半区栏位：奖励跨过63只记一次',()=>{
  const sheet={...Object.fromEntries(CATEGORIES.map(c=>[c,0])),choice:5,six:null,ace:3,deuce:6,trey:9,four:12,five:15} as ScoreSheet;
  assert.equal(bonus(sheet),0);
  assert.equal(solver.evaluate(sheet,[6,6,6,2,3],3)[0].expected,103);
  sheet.four=20;sheet.five=25;
  assert.equal(bonus(sheet),35);
  assert.equal(solver.evaluate(sheet,[6,6,6,2,3],3)[0].expected,121);
});
test('仅剩全选：一回合期望为70/3',()=>{
  const sheet={...Object.fromEntries(CATEGORIES.map(c=>[c,0])),choice:null} as ScoreSheet;
  let value=0;
  for(let encoded=0;encoded<7776;encoded++){let n=encoded;const dice=Array.from({length:5},()=>{const v=n%6+1;n=Math.floor(n/6);return v;});value+=solver.evaluate(sheet,dice,1)[0].expected/7776;}
  assert.ok(Math.abs(value-70/3)<1e-9);
});
test('只剩快艇：两次重掷的概率与解析值一致',()=>{
  const sheet={...Object.fromEntries(CATEGORIES.map(c=>[c,0])),choice:5,yacht:null} as ScoreSheet;
  const choices=solver.evaluate(sheet,[6,6,6,6,2],2);
  assert.equal(choices[0].type,'keep');assert.deepEqual(choices[0].type==='keep'?choices[0].dice:[],[6,6,6,6]);
  assert.ok(Math.abs(choices[0].expected-(5+50/6))<1e-10);
});
test('结束后没有动作，第三掷只允许填栏，输入错误拒绝计算',()=>{
  const finished={...Object.fromEntries(CATEGORIES.map(c=>[c,0])),choice:5} as ScoreSheet;
  assert.deepEqual(solver.evaluate(finished,[1,2,3,4,5],3),[]);
  assert.ok(solver.evaluate(emptySheet(),[1,2,3,4,5],3).every(c=>c.type==='score'));
  assert.throws(()=>solver.evaluate(emptySheet(),[0,2,3,4,5],1));
  assert.throws(()=>solver.evaluate({...emptySheet(),smallStraight:30},[1,2,3,4,5],1));
});
test('与原项目100个局面、1944个动作的期望值完全一致',()=>{
  const fixtures=JSON.parse(readFileSync(new URL('./upstream-fixtures.json',import.meta.url),'utf8')) as {sheet:ScoreSheet;dice:number[];roll:1|2|3;choices:({type:'keep';dice:number[];expected:number}|{type:'score';category:string;expected:number})[]}[];
  let comparisons=0;
  for(const fixture of fixtures){
    const actual=solver.evaluate(fixture.sheet,fixture.dice,fixture.roll);
    const key=(c:{type:string;dice?:number[];category?:string})=>c.type==='keep'?`keep:${c.dice!.join(',')}`:`score:${c.category}`;
    const lookup=new Map(actual.map(c=>[key(c),c.expected]));
    assert.equal(actual.length,fixture.choices.length);
    for(const choice of fixture.choices){assert.ok(Math.abs(lookup.get(key(choice))!-choice.expected)<1e-8);comparisons++;}
  }
  assert.equal(comparisons,1944);
});
