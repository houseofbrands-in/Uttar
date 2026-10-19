import corpus from '../data/gita-corpus.json';
export type Language = 'en' | 'hi';
export type Verse = (typeof corpus.verses)[number];
export const chapters = corpus.chapters;
export const verses = corpus.verses;
export const corpusSource = corpus.source;
export const getVerse = (chapter:number,verse:number):Verse|undefined => verses.find(v=>v.chapter===chapter && v.verse===verse);
export const getChapterVerses = (chapter:number):Verse[]=> verses.filter(v=>v.chapter===chapter);
