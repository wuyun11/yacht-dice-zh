import {CATEGORIES,emptySheet,scoreDice,validateSheet,type Category,type ScoreSheet} from './engine/rules.ts';
import type {Choice} from './engine/solver.ts';

export type GameState={editDice:boolean;dice:number[];roll:0|1|2|3;sheet:ScoreSheet;held:boolean[]};
export const freshState=(editDice=false):GameState=>({editDice,dice:[1,1,1,1,1],roll:0,sheet:emptySheet(),held:Array(5).fill(false)});

// Read old saved games and exports without changing the position on the scorecard.
export function parseState(value:unknown):GameState|null {
  if(!value||typeof value!=='object')return null;
  const s=value as Record<string,unknown>;
  const editDice=typeof s.editDice==='boolean'?s.editDice:s.mode==='analysis'?true:s.mode==='practice'?false:null;
  if(editDice===null||!validateSheet(s.sheet)||![0,1,2,3].includes(s.roll as number)||!Array.isArray(s.dice)||s.dice.length!==5||s.dice.some(d=>!Number.isInteger(d)||d<1||d>6)||!Array.isArray(s.held)||s.held.length!==5||s.held.some(h=>typeof h!=='boolean'))return null;
  return {editDice,dice:[...s.dice],roll:s.roll as GameState['roll'],sheet:Object.fromEntries(CATEGORIES.map(c=>[c,(s.sheet as ScoreSheet)[c]])) as ScoreSheet,held:[...s.held]};
}

const complete=(state:GameState)=>CATEGORIES.every(c=>state.sheet[c]!==null);
const randomDie=(random:()=>number)=>Math.floor(random()*6)+1;

export function rollState(state:GameState,random:()=>number=Math.random):GameState {
  if(state.roll===3||complete(state))return state;
  return {...state,roll:(state.roll+1) as GameState['roll'],dice:state.dice.map((d,i)=>state.roll>0&&state.held[i]?d:randomDie(random)),held:state.roll===0?Array(5).fill(false):state.held};
}

export function recordState(state:GameState,category:Category,nextRound=false,random:()=>number=Math.random):GameState {
  if(state.roll===0||state.sheet[category]!==null)return state;
  const scored:GameState={...state,sheet:{...state.sheet,[category]:scoreDice(category,state.dice)},roll:0,held:Array(5).fill(false)};
  return nextRound?rollState(scored,random):scored;
}

// Each combined action returns one state so one Undo restores the whole action.
export function applyChoice(state:GameState,choice:Choice,advance=false,random:()=>number=Math.random):GameState {
  if(state.roll===0||complete(state))return state;
  if(choice.type==='score')return recordState(state,choice.category,advance,random);
  if(state.roll===3)return state;
  const remaining=[...choice.dice];
  const held=state.dice.map(d=>{const i=remaining.indexOf(d);if(i<0)return false;remaining.splice(i,1);return true;});
  const kept={...state,held};
  return advance?rollState(kept,random):kept;
}
