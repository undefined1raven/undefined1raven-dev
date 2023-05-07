<script>
	import { fade } from 'svelte/transition';
    import Nav from './Nav.svelte';
	let show;
	export { show };
</script>

{#if show}
	<div transition:fade={{ duration: 150 }} id="xxx" />
    <Nav primaryColor="#6100DC"></Nav>
{/if}

<style>
	#xxx {
		position: absolute;
		top: 0%;
		left: 0%;
		width: 100%;
		height: 100%;
		background: radial-gradient(
			60.7% 60.73% at 50% 24.65%,
			rgba(97, 0, 220, 0.2) 0%,
			rgba(53, 0, 122, 0.1) 100%
		);
	}
</style>
