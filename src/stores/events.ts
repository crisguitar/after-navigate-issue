import { writable } from 'svelte/store';
import type { Readable, Writable } from 'svelte/store';

interface EventsStore extends Readable<string[]> {
	readonly reset: () => void;
	readonly push: (event: string) => void;
}

export const eventsStore: EventsStore = (() => {
	const store: Writable<string[]> = writable([]);

	return {
		subscribe: store.subscribe,
		reset: () => store.set([]),
		push: (event: string) => store.update((old) => [...old, event])
	};
})();
