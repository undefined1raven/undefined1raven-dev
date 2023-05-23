<script>
	import { onMount } from 'svelte';
	import RingRelayCryptoSnippet from '../sourceCodeSnippets/RingRelayCrypto';
	import RingRelayChatSnippet from '../sourceCodeSnippets/RingRelayChat';
	import ProjectEagleAuth from '../sourceCodeSnippets/ProjectEagleAuth';
	import DroneBuzzEnemy from '../sourceCodeSnippets/DroneBuzzEnemy';
	import DroneBuzzScorestreaks from '../sourceCodeSnippets/DroneBuzzScorestreaks';
	import Label from './Label.svelte';
	import isMobile from '../fn/isMobile';

	let source = 'RingRelay.Crypto';
	let sourceHash = {
		'RingRelay.0': RingRelayCryptoSnippet(),
		'RingRelay.1': RingRelayChatSnippet(),
		'ProjectEagle.0': ProjectEagleAuth(),
		'DroneBuzz.0': DroneBuzzEnemy(),
		'DroneBuzz.1': DroneBuzzScorestreaks()
	};
	const root = document.documentElement;
	let splitted = sourceHash[source]?.split('');
	let displayedText = '';
	let rollInterval;
	let color = '#999';
	let sourceCodeSnippetContainerWidth = '20%';
	let screenSize = {
		width: root.clientWidth,
		height: root.clientHeight
	};

	function sourceCodeSnippetContainerWidthController(screenSize) {
		if (isMobile()) {
			sourceCodeSnippetContainerWidth = '100%';
		} else {
			if (screenSize.width < 1300) {
				if (screenSize.width < 800) {
					sourceCodeSnippetContainerWidth = '100%';
				} else {
					sourceCodeSnippetContainerWidth = '30%';
				}
			} else {
				sourceCodeSnippetContainerWidth = '20%';
			}
		}
	}

	$: sourceCodeSnippetContainerWidthController(screenSize);

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
			} else {
				startRoll();
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

<svelte:window
	on:resize={() => {
		screenSize = { height: root.clientHeight, width: root.clientWidth };
	}}
/>
<div class="sourceCodeSnippetContainer" style={`width: ${sourceCodeSnippetContainerWidth};`}>
	<Label
		id="sourceCodeSnippet"
		top="0%"
		left="3%"
		width="100%"
		height="100%"
		color={`${color}${isMobile() || screenSize.width < 1300 ? '60' : 'FF'}`}
		text={displayedText}
		style="white-space: break-spaces; text-align: start; letter-spacing: 0.08vh;"
		desktopFont="13px"
	/>
</div>

<style>
	:global(#sourceCodeSnippet) {
		font-family: 'Roboto Mono', monospace;
	}
	.sourceCodeSnippetContainer {
		position: absolute;
		top: 28%;
		width: 20%;
		height: 72%;
		left: 0.3525%;
		overflow: hidden;
	}
</style>
