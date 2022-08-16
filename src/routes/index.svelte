<script lang="ts">
	import { goto } from '$app/navigation';
	import { eventsStore } from '../stores/events';
	import { onMount } from 'svelte';
	import Events from '../Events.svelte';

	const importAndNavigate = async () => {
		// this import breaks regular sveltekit rendering process
		await import('@opentelemetry/context-zone');
		await goto('/page-2');
	};

	onMount(() => {
		eventsStore.push('[INDEX] mounted');
	});
</script>

<h1>Welcome to SvelteKit</h1>
<ol>
	<li>
		<a href="/page-2" sveltekit:prefetch>Navigate</a> to another page (without loading OTEL ZoneContextManager)
	</li>
	<li>
		<a href="/page-2" on:click|preventDefault={importAndNavigate} sveltekit:prefetch>Navigate</a> to
		another page (importing OTEL ZoneContextManager)
	</li>
	<li>
		<a href="/" on:click|preventDefault={() => location.reload()} sveltekit:prefetch>Refresh</a> the
		page to reset normal operations
	</li>
</ol>

<Events />
