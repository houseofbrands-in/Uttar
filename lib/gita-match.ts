import type {Verse} from './gita';

export const MAX_QUESTION = 800;
const stop = new Set('the a an is are was were to of in for on or with i me my our should can do what how why when where will from about and it be you your this that if have has could would please tell need want am im i’m ive my myself life mujhe mera meri mere kya kaise kab kyon kyu hai hain ho hoga hogi kar kya main mai mujhey ke ki ko se aur mein me kya karu karun mujhe'.split(' '));

// Helpful topical tags used ONLY as a local fallback/retrieval stage, not as scripture quotations.
const topics: {terms:string[];references:string[]}[] = [
 {terms:['career','job','work','profession','business','promotion','office','काम','नौकरी','करियर','व्यापार','रोजगार','कामकाज'],references:['2.47','3.8','3.19','18.45','18.47']},
 {terms:['fear','scared','anxiety','anxious','worried','worry','stress','panic','डर','चिंता','भय','घबराहट','तनाव'],references:['2.14','2.48','6.5','6.26','18.66']},
 {terms:['anger','angry','conflict','fight','resentment','गुस्सा','क्रोध','झगड़ा','क्लेश'],references:['2.62','2.63','16.21','12.13']},
 {terms:['decision','confused','confusion','choice','uncertain','doubt','decide','निर्णय','उलझन','दुविधा','फैसला','समझ'],references:['2.47','2.50','4.34','18.63']},
 {terms:['relationship','partner','marriage','family','friend','love','betrayal','रिश्ता','शादी','परिवार','प्रेम','दोस्ती','संबंध'],references:['12.13','12.14','6.9','16.2']},
 {terms:['married','spouse','wife','husband','affair','commitment','vows','divorce','विवाहित','पत्नी','पति','विवाह','प्रतिबद्धता'],references:['3.19','16.2','17.15','18.63','12.13']},
 {terms:['dishonest','cheating','fraud','integrity','ethical','competitor','deceit','ईमानदारी','बेईमानी','धोखा','नैतिक'],references:['16.1','16.2','16.21','17.15','3.19']},
 {terms:['family duty','responsibility','sacrifice','boundaries','expectations','dreams','जिम्मेदारी','त्याग','उम्मीद','सपने'],references:['3.19','6.5','12.13','18.63','18.47']},
 {terms:['failure','success','result','achievement','exam','study','school','परीक्षा','सफलता','असफलता','नतीजा','पढ़ाई'],references:['2.47','2.48','6.5','18.14']},
 {terms:['loss','grief','death','sad','sadness','suffering','heartbreak','शोक','दुख','मृत्यु','हानि','नुकसान','उदासी'],references:['2.11','2.13','2.22','2.27']},
 {terms:['peace','calm','meditate','focus','mind','sleep','शांति','मन','ध्यान','एकाग्रता'],references:['6.19','6.26','2.66','6.35']},
 {terms:['money','profit','income','wealth','debt','financial','पैसा','धन','ऋण','कर्ज','आय'],references:['2.47','16.21','17.20','3.9']},
 {terms:['purpose','meaning','duty','values','ethics','right','wrong','धर्म','कर्तव्य','उद्देश्य','सही','गलत','मूल्य'],references:['3.19','18.47','2.31','16.1']},
];
function terms(text:string):string[]{return (text.toLocaleLowerCase().match(/[\p{L}\p{N}]+/gu)||[]).filter(x=>x.length>=3&&!stop.has(x)).slice(0,70)}
export type Match={verse:Verse;score:number;reasons:string[]};
export function findCandidateVerses(question:string, verses:Verse[], limit=12):Match[]{
 const tokens=terms(question);const lower=question.toLocaleLowerCase();
 const weights=new Map<string,number>();
 for(const topic of topics)if(topic.terms.some(t=>t.includes(' ')?lower.includes(t):terms(lower).includes(t))){for(const ref of topic.references)weights.set(ref,(weights.get(ref)||0)+14)}
 return verses.map(v=>{
  const ref=`${v.chapter}.${v.verse}`;
  const en=v.translation.en.toLocaleLowerCase();const hi=v.translation.hi.toLocaleLowerCase();
  let score=weights.get(ref)||0;const reasons:string[]=[];
  for(const word of tokens){if(en.includes(word)||hi.includes(word)){score+= word.length>5?3:2;reasons.push(word)}else if(v.transliteration.toLocaleLowerCase().includes(word)){score+=1}}
  return {verse:v,score,reasons};
 }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score||a.verse.chapter-b.verse.chapter||a.verse.verse-b.verse.verse).slice(0,limit);
}
export function isHighStakes(q:string){return /suicid|self.harm|kill myself|end my life|आत्महत्या|खुदकुशी|medical|medicine|treatment|cancer|diagnos|doctor|दवा|इलाज|बीमारी|legal|court|lawsuit|lawyer|कानून|वकील|investment|invest|stock|loan|कर्ज़|कर्ज|निवेश/i.test(q)}
