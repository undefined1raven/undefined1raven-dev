<script>
	import { onMount } from "svelte";
	import getRandomInt from "../fn/getRandomInt";

	let size = '2vh';
	let style = "";
	let color = "#2400FF";
    let id;
	let blurPx = 0;

    let randomArray = [];
    onMount(() => {
        setInterval(() => {
            randomArray = [];
            for(let ix = 0; ix < 4; ix++){
                randomArray.push(getRandomOpacity());
            }
        }, 200)
    })

    function getRandomOpacity(){
        const ran = Math.random();
        if(ran < .3){
            return .4;
        }else{
            return (getRandomInt(5, 10) / 10).toFixed(0);
        }
    }

	export { size, style, color, id, blurPx };
</script>

<div style="position: absolute; width: {size}; height: {size}; {style}">
	<svg id={id ? id : ''} width="100%" height="100%" style="position: absolute; " viewBox="0 0 52 62" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect x="1.10554" y="30.6127" width="35.0285" height="35.0285" transform="rotate(-45 1.10554 30.6127)" stroke-opacity={"1"} stroke={color}/>
		<rect x="1.18172" y="36.2166" width="35.0285" height="35.0285" transform="rotate(-45 1.18172 36.2166)" stroke-opacity={randomArray[1]} stroke={color}/>
		<rect x="1.0406" y="25.8093" width="35.0285" height="35.0285" transform="rotate(-45 1.0406 25.8093)" stroke-opacity={randomArray[0]} stroke={color}/>
	</svg>
	<div style="position: absolute; width: 100%; height: 100%; backdrop-filter: blur({blurPx}px);"></div>
</div>

<style>
	rect{
		transition: all linear 0.4s;
	}
</style>
