<script lang="ts">
	import { afterNavigate, goto } from '$app/navigation';
	import { eventsStore } from '../stores/events';
	import { onMount } from 'svelte';
	import Events from '../Events.svelte';

	let originPage: string | undefined;

	eventsStore.push('[PAGE 2] initializing');

	afterNavigate((navigation: { from: URL | null; to: URL }) => {
		originPage = navigation.from?.pathname;
		eventsStore.push('[PAGE 2] after navigate callback called');
	});

	onMount(() => {
		eventsStore.push('[PAGE 2] mounted');
	});
</script>

{#if originPage}
	<h2>After navigate works, you came from {originPage}</h2>
{:else}
	<h2>There is no origin page, you either refreshed the screen or navigation is broken</h2>
{/if}

<Events />

<button on:click={() => goto('/')}>Go back</button>
