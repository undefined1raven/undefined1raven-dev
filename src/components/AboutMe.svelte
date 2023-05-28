<script>
	import { onMount } from 'svelte';
	import windowID from '../stores/windowID';
    import Label from './Label.svelte';
    import Button from './Button.svelte';

	let lwindowID = {};
	onMount(() => {
		windowID.subscribe((WID) => {
			lwindowID = WID;
		});
	});
</script>

{#if lwindowID == 'contact'}
	<div class="aboutMeContainer">
	</div>
{/if}
