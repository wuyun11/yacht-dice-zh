export const CATEGORIES = ['ace', 'deuce', 'trey', 'four', 'five', 'six', 'choice', 'fourOfAKind', 'fullHouse', 'smallStraight', 'bigStraight', 'yacht'] as const;
export type Category = typeof CATEGORIES[number];
export type ScoreSheet = Record<Category, number | null>;
export const LABELS: Record<Category, string> = { ace:'一点', deuce:'二点', trey:'三点', four:'四点', five:'五点', six:'六点', choice:'全选', fourOfAKind:'四条', fullHouse:'葫芦', smallStraight:'小顺', bigStraight:'大顺', yacht:'快艇' };
export const DESCRIPTIONS: Record<Category, string> = {ace:'所有 1 的点数和',deuce:'所有 2 的点数和',trey:'所有 3 的点数和',four:'所有 4 的点数和',five:'所有 5 的点数和',six:'所有 6 的点数和',choice:'任意组合，五颗总和',fourOfAKind:'至少四颗相同，五颗总和',fullHouse:'三带二或五颗相同，五颗总和',smallStraight:'至少四个连续点数，15 分',bigStraight:'五个连续点数，30 分',yacht:'五颗相同，50 分'};
export function emptySheet(): ScoreSheet { return Object.fromEntries(CATEGORIES.map(c => [c, null])) as ScoreSheet; }
export function countsOf(dice: readonly number[]): number[] {
  if(dice.length!==5 || dice.some(x=>!Number.isInteger(x)||x<1||x>6)) throw new Error('请输入五颗 1～6 点的骰子');
  const counts=Array<number>(6).fill(0); for(const d of dice) counts[d-1]++; return counts;
}
export function scoreCounts(c: number, counts: readonly number[]): number {
  if(c<6) return counts[c]*(c+1);
  const total=counts.reduce((s,n,i)=>s+n*(i+1),0);
  if(c===6) return total;
  if(c===7) return counts.some(n=>n>=4)?total:0;
  if(c===8) return counts.every(n=>n!==1)?total:0;
  if(c===11) return counts.some(n=>n===5)?50:0;
  let run=0,longest=0; for(const n of counts){run=n>0?run+1:0;longest=Math.max(longest,run);}
  return c===9?(longest>=4?15:0):(longest===5?30:0);
}
export function scoreDice(c: Category,dice: readonly number[]): number { return scoreCounts(CATEGORIES.indexOf(c),countsOf(dice)); }
export function upperTotal(sheet: ScoreSheet): number { return CATEGORIES.slice(0,6).reduce((s,c)=>s+(sheet[c]??0),0); }
export function bonus(sheet: ScoreSheet): number { return upperTotal(sheet)>=63?35:0; }
export function totalScore(sheet: ScoreSheet): number { return CATEGORIES.reduce((s,c)=>s+(sheet[c]??0),0)+bonus(sheet); }
export function validScores(c: Category): number[] {
  const i=CATEGORIES.indexOf(c);
  if(i<6) return Array.from({length:6},(_,n)=>n*(i+1));
  if(c==='choice') return Array.from({length:26},(_,n)=>n+5);
  if(c==='fourOfAKind') return [0,...Array.from({length:26},(_,n)=>n+5)];
  if(c==='fullHouse') return Array.from({length:31},(_,n)=>n).filter(n=>![1,2,3,4,6,29].includes(n));
  return c==='smallStraight'?[0,15]:c==='bigStraight'?[0,30]:[0,50];
}
export function validateSheet(sheet: unknown): sheet is ScoreSheet {
  if(!sheet || typeof sheet!=='object' || Array.isArray(sheet)) return false;
  return CATEGORIES.every(c=>{ const v=(sheet as ScoreSheet)[c];return v===null || validScores(c).includes(v); });
}
