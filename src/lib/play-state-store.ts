import { writable } from 'svelte/store';

export type PlayState = 'paused' | 'playing' | 'between-sets';

export const playState = writable<PlayState>('between-sets');