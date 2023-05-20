<script>
	import { onMount } from 'svelte';
	import RingRelayCryptoSnippet from '../sourceCodeSnippets/RingRelayCrypto';
	import Label from './Label.svelte';

	let splitted = RingRelayCryptoSnippet().split(' ');
	let displayedText = '';
	function addChunkToText(ix) {
		displayedText += splitted[ix];
	}

	onMount(() => {
		let ix = 0;
		setInterval(() => {
			if (ix < splitted.length) {
				addChunkToText(ix);
                displayedText += ' ';
				ix++;
			}
		}, 50);
	});
</script>

<div class="sourceCodeSnippetContainer">
	<Label
		top="0%"
		left="0%"
		width="100%"
		height="100%"
		color="#6100FF"
		text={displayedText}
		style="white-space: break-spaces; text-align: start; letter-spacing: 0.08vh;"
		desktopFont="13px"
	/>
</div>

<style>
	.sourceCodeSnippetContainer {
		position: absolute;
		top: 28%;
		width: 20%;
		height: 72%;
		left: 0%;
        overflow: hidden;
	}
</style>
