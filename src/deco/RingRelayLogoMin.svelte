<script>
    import { onMount, onDestroy } from "svelte";
    let size = '5vh';
    let monochrome = false;
    let style = "";
    let animated = false;
    let opacities = [];
    let interval;
    onMount(() => {
        interval = setInterval(() => {
            opacities = [];
            for (let ix = 0; ix <= 3; ix++) {
                opacities.push(getRandomOpacity());
            }
        }, 500);
    });

    onDestroy(() => {
        clearInterval(interval);
    });

    function getRandomOpacity() {
        if(animated){
            let random = Math.random();
            if (random > 0.2) {
                return random;
            } else {
                return 0.2;
            }
        }
    }
    export { size, monochrome, style, animated }
</script>


<svg class="deco" width="{size}" height="{size}" style="position: absolute; {style}" viewBox="0 0 56 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.724107" width="32.0353" height="31.9222" transform="matrix(0.724107 -0.689687 0.724107 0.689687 0.199776 23.2834)" fill={monochrome ? "#444" : "#6100DC"} fill-opacity="0.2" stroke={monochrome ? "#444" : "#6100DC"} stroke-width="0.5" opacity={opacities[0]}/>
<rect x="0.724107" width="32.0353" height="31.9222" transform="matrix(0.724107 -0.689687 0.724107 0.689687 8.43952 23.7934)" fill={monochrome ? "#444" : "#6100DC"} fill-opacity="0.2" stroke={monochrome ? "#444" : "#6100DC"} stroke-width="0.5" opacity={opacities[1]}/>
<path d="M36.4576 22.7316C36.4576 27.0035 32.8145 30.5077 28.2685 30.5077C23.7226 30.5077 20.0794 27.0035 20.0794 22.7316C20.0794 18.4597 23.7226 14.9555 28.2685 14.9555C32.8145 14.9555 36.4576 18.4597 36.4576 22.7316Z" stroke={monochrome ? "#444" : "#6100DC"} stroke-width="0.5"/>
</svg>


<style>
    rect, path{
        transition: opacity ease-in-out 0.5s, fill linear 0.2s;
    }
</style>