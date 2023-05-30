<script>
	import Logo from '../deco/logo.svelte';
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import isMobile from '../fn/isMobile';
	import Label from './Label.svelte';

	const dispatch = createEventDispatcher();

	let iniAniDecoShowArr = [false, false, false, false, false];
	let introFinished = false;

	onMount(() => {
		setTimeout(() => {
			iniAniDecoShowArr[0] = true;
		}, 100);
		setTimeout(() => {
			iniAniDecoShowArr[1] = true;
		}, 200);
		setTimeout(() => {
			iniAniDecoShowArr[2] = true;
		}, 300);
		setTimeout(() => {
			iniAniDecoShowArr[3] = true;
		}, 400);
		setTimeout(() => {
			iniAniDecoShowArr.forEach((deco, ix) => {
				iniAniDecoShowArr[ix] = false;
			});
			introFinished = true;
			dispatch('introFinished');
		}, 800);
	});
</script>

<div class="iniSeqContainer">
	<Logo id="mainLogo" color="#2400ff" size="30vh" show={iniAniDecoShowArr[3]} />
	<Logo
		id="mainLogo"
		color="#11007C"
		size="30vh"
		show={iniAniDecoShowArr[2] && !isMobile()}
		style="left: calc(25.833333333% + 8%);"
	/>
	<Logo
		id="mainLogo"
		color="#11007C"
		size="30vh"
		show={iniAniDecoShowArr[1] && !isMobile()}
		style="left: calc(9.479166667% + 8%);"
	/>
	<Logo
		id="mainLogo"
		color="#11007C"
		size="30vh"
		show={iniAniDecoShowArr[0] && !isMobile()}
		style="left: calc(-6.770833333% + 8%);"
	/>
	<Label
		className="introText"
		text="[raven@axq]>Link Established with host [76.76.21.93]"
		color="#2400FF"
		show={iniAniDecoShowArr[0]}
		top="2%"
		horizontalFont="5px"
		desktopFont="15px"
	/>
	<Label
		className="introText"
		text="[raven@axq]>[Requesting Deep Storage Link]"
		color="#2400FF"
		show={iniAniDecoShowArr[1]}
		top="5%"
		horizontalFont="5px"
		desktopFont="15px"
	/>
	<Label
		className="introText"
		text="[raven@axq]>[Running ini seq]"
		color="#2400FF"
		show={iniAniDecoShowArr[2]}
		top="8%"
		horizontalFont="5px"
		desktopFont="15px"
	/>
	<Label
		className="introText"
		text="[raven@axq]>[Loaded]"
		color="#2400FF"
		show={iniAniDecoShowArr[3]}
		horizontalFont="5px"
		top="11%"
		desktopFont="15px"
	/>
</div>
