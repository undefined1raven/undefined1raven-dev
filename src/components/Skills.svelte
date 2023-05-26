<script>
	import { fly } from 'svelte/transition';
	import Button from './Button.svelte';
    let show = false;

	export { show };
</script>

{#if show}
	<div class="skillsContainer">
		<div class="skillsMenuContainer" transition:fly={{duration: 150, delay: 150, x: '-30%', y: '-20%'}}>
            <Button label="Front-end" color="#FFF" width="100%" height="20%" borderColor="#6100FF" backgroundColor="#6100FF20" desktopFont="20px" borderRadius="5px"></Button>
            <Button label="Back-end" top="26.666666667%" color="#6100FF" width="100%" height="20%" borderColor="#6100FF" backgroundColor="#6100FF00" desktopFont="20px" borderRadius="5px"></Button>
            <Button label="Security" top="53.333333333%" color="#6100FF" width="100%" height="20%" borderColor="#6100FF" backgroundColor="#6100FF00" desktopFont="20px" borderRadius="5px"></Button>
            <Button label="Dev Ops" top="80%" color="#6100FF" width="100%" height="20%" borderColor="#6100FF" backgroundColor="#6100FF00" desktopFont="20px" borderRadius="5px"></Button>
        </div>
        <div class="skillsContainerActual" transition:fly={{duration: 150, delay: 150, x: '30%', y: '20%'}}></div>
	</div>
{/if}

<style>
    .skillsContainerActual{
        position: absolute;
		top: 13.425925926%;
        left: 32.34375%;
        width: 41.822916667%;
        height: 70.833333333%;
        border: solid 1px #6100FF;
        background-color: #6100FF20;
        border-radius: 15px;
    }
	.skillsMenuContainer {
		position: absolute;
		top: 13.425925926%;
		left: 19.427083333%;
		width: 12.239583333%;
		height: 20.833333333%;
	}
</style>
