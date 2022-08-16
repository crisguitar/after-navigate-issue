<script lang="ts">
	import { eventsStore } from './stores/events';
</script>

<div style="margin: 10px 0;">
	Events:
	<ul>
		{#each $eventsStore as event}
			<li>{event}</li>
		{/each}
	</ul>

	<button on:click={() => eventsStore.reset()}>Clear</button>
</div>
