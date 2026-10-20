import test from 'node:test';
import assert from 'node:assert/strict';
import {CATEGORIES,emptySheet,totalScore,type ScoreSheet} from '../src/engine/rules.ts';
import {freshState,parseState,rollState,recordState,applyChoice,type GameState} from '../src/game.ts';

const position=():GameState=>({...freshState(true),dice:[6,6,6,2,3],roll:1});

test('旧模式存档迁移到编辑开关，保持骰子、保留、掷次和分数',()=>{
  const old={...position(),mode:'analysis',held:[true,true,true,false,false],sheet:{...emptySheet(),ace:0,deuce:4}} as Record<string,unknown>;
  delete old.editDice;
  const migrated=parseState(old)!;
  assert.equal(migrated.editDice,true);
  assert.deepEqual(migrated.dice,old.dice);
  assert.deepEqual(migrated.held,old.held);
  assert.deepEqual(migrated.sheet,old.sheet);
  assert.equal(migrated.roll,old.roll);
  assert.equal('mode' in migrated,false);
  assert.equal(parseState({...old,mode:'practice'})!.editDice,false);
  assert.deepEqual(parseState(JSON.parse(JSON.stringify(migrated))),migrated);
  for(const invalid of [{...migrated,dice:[0,2,3,4,5]},{...migrated,held:[true]},{...migrated,editDice:'yes'},{...migrated,roll:4},{...migrated,sheet:{}}])assert.equal(parseState(invalid),null);
});

test('保留并重掷按推荐匹配重复点数，不沿用之前的保留，也不修改原局面',()=>{
  const start={...position(),held:[false,false,false,true,true]};
  const before=structuredClone(start);let calls=0;
  const next=applyChoice(start,{type:'keep',dice:[6,6,6],expected:200},true,()=>calls++===0?0:.999);
  assert.deepEqual(next.dice,[6,6,6,1,6]);
  assert.deepEqual(next.held,[true,true,true,false,false]);
  assert.equal(next.roll,2);
  assert.equal(calls,2);
  assert.deepEqual(start,before);
  assert.deepEqual(next.sheet,start.sheet);
});

test('不保留时重掷全部骰子，第三掷和结束后不能再重掷',()=>{
  let calls=0;const random=()=>{calls++;return 0;};
  const next=applyChoice(position(),{type:'keep',dice:[],expected:190},true,random);
  assert.equal(calls,5);assert.deepEqual(next.dice,[1,1,1,1,1]);assert.deepEqual(next.held,Array(5).fill(false));
  const third={...position(),roll:3 as const};
  assert.equal(rollState(third,random),third);
  assert.equal(applyChoice(third,{type:'keep',dice:[6],expected:0},true,random),third);
  assert.equal(calls,5);
});

test('记分并掷下一回合同时更新奖励、掷次和保留，重新掷出全部五颗',()=>{
  for(const roll of [1,3] as const){
    const start={...position(),roll,held:Array(5).fill(true),sheet:{...emptySheet(),ace:3,deuce:6,trey:9,four:12,five:15}};
    let calls=0;
    const next=applyChoice(start,{type:'score',category:'six',points:999,expected:0},true,()=>calls++/6);
    assert.equal(next.sheet.six,18);assert.equal(totalScore(next.sheet),98);
    assert.equal(next.roll,1);assert.equal(calls,5);assert.deepEqual(next.dice,[1,2,3,4,5]);
    assert.deepEqual(next.held,Array(5).fill(false));assert.equal(next.editDice,true);assert.equal(start.sheet.six,null);
  }
});

test('最后一栏记分结束本局，不生成下一回合或重复计分',()=>{
  const sheet={...Object.fromEntries(CATEGORIES.map(c=>[c,0])),choice:5,yacht:null} as ScoreSheet;
  const start={...position(),dice:[6,6,6,6,6],roll:3 as const,sheet};
  const noRoll=()=>{throw new Error('最后一栏不应掷骰');};
  const next=applyChoice(start,{type:'score',category:'yacht',points:50,expected:55},true,noRoll);
  assert.equal(next.roll,0);assert.equal(next.sheet.yacht,50);assert.equal(totalScore(next.sheet),55);
  assert.deepEqual(next.held,Array(5).fill(false));
  assert.equal(rollState(next,noRoll),next);
  assert.equal(recordState(next,'yacht',true,noRoll),next);
});

test('单步按钮只保留或只记分，首次掷骰忽略上回合的保留',()=>{
  const noRoll=()=>{throw new Error('单步操作不应掷骰');};
  const start=position();
  const kept=applyChoice(start,{type:'keep',dice:[6,6],expected:0},false,noRoll);
  assert.deepEqual(kept.dice,start.dice);assert.equal(kept.roll,1);assert.deepEqual(kept.held,[true,true,false,false,false]);
  const scored=recordState(kept,'six',false,noRoll);
  assert.equal(scored.roll,0);assert.equal(scored.sheet.six,18);assert.deepEqual(scored.dice,start.dice);
  const first=rollState({...scored,held:Array(5).fill(true)},()=>0);
  assert.equal(first.roll,1);assert.deepEqual(first.dice,[1,1,1,1,1]);assert.deepEqual(first.held,Array(5).fill(false));
});
