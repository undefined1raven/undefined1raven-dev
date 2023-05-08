<script>
	import RingRelayLogoMin from '../deco/RingRelayLogoMin.svelte';
	import ProjectEagleLogo from '../deco/ProjectEagleLogo.svelte';
	import DroneBuzzLogo from '../deco/DroneBuzzLogo.svelte';
    import {fly} from 'svelte/transition';
</script>

<div class="projectsNavContainer" transition:fly={{x: '20%', duration: 200, delay: 150}}>
    <div class="logoContainer" style="border: solid 1px #6100FF;">
        <RingRelayLogoMin size="95%" monochrome={false} style="top: 0%;"></RingRelayLogoMin>
    </div>
    <div class="logoContainer" style="border: solid 1px #444; top: 34.868421053%;">
        <ProjectEagleLogo size="95%" monochrome={true} style="top: 0%;"></ProjectEagleLogo>
    </div>
    <div class="logoContainer" style="border: solid 1px #444; top: 69.736842105%;">
        <DroneBuzzLogo size="100%" monochrome={true} style="top: 0%;"></DroneBuzzLogo>
    </div>
</div>

<style>
    .logoContainer{
        position: absolute;
        width: 100%;
        height: 30.115131579%;
    }
	.projectsNavContainer {
        position: absolute;
        top: 0.555555556%;
        left: 94.479166667%;
        width: 5.208333333%;
        height: 28.148148148%;
	}
</style>
