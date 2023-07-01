import { writable } from 'svelte/store';

export type PlayState = 'paused' | 'playing';

export const playState = writable<PlayState>('paused');