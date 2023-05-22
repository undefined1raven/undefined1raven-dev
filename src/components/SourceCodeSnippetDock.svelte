<script>
	import { onMount } from 'svelte';
	import RingRelayCryptoSnippet from '../sourceCodeSnippets/RingRelayCrypto';
	import RingRelayChatSnippet from '../sourceCodeSnippets/RingRelayChat';
	import ProjectEagleAuth from '../sourceCodeSnippets/ProjectEagleAuth';
	import DroneBuzzEnemy from '../sourceCodeSnippets/DroneBuzzEnemy';
	import DroneBuzzScorestreaks from '../sourceCodeSnippets/DroneBuzzScorestreaks';
	import Label from './Label.svelte';

	let source = 'RingRelay.Crypto';
	let sourceHash = {
		'RingRelay.0': RingRelayCryptoSnippet(),
		'RingRelay.1': RingRelayChatSnippet(),
		'ProjectEagle.0': ProjectEagleAuth(),
		'DroneBuzz.0': DroneBuzzEnemy(),
		'DroneBuzz.1': DroneBuzzScorestreaks()
	};
	let splitted = sourceHash[source]?.split('');
	let displayedText = '';
	let rollInterval;
	let color = '#999';

	$: updateDock(source);

	function updateDock() {
		splitted = sourceHash[source].split('');
		displayedText = '';
		startRoll();
	}

	function startRoll() {
		let ix = 0;
		if (rollInterval != undefined) {
			clearInterval(rollInterval);
		}
		rollInterval = setInterval(() => {
			if (ix < splitted.length) {
				addChunkToText(ix);
				ix++;
			}
		}, 15);
	}

	function addChunkToText(ix) {
		displayedText += splitted[ix];
	}

	onMount(() => {
		startRoll();
	});

	export { source, color };
</script>

<div class="sourceCodeSnippetContainer">
	<Label
		top="0%"
		left="3%"
		width="100%"
		height="100%"
		{color}
		text={displayedText}
		style="white-space: break-spaces; text-align: start; letter-spacing: 0.08vh;"
		desktopFont="13px"
	/>
</div>

<style>
	.sourceCodeSnippetContainer {
		position: absolute;
		top: 28%;
		width: 15.5%;
		height: 72%;
		left: 0.3525%;
		overflow: hidden;
	}
</style>
