<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import getRandomInt from '../fn/getRandomInt';
	let color = '#6100FF';
	let width = '5vh';
	let height = '3vh';
	let opacity = 1;
	let style = '';

	let randomArray = [];
	onMount(() => {
		randomArray = [];
		for (let ix = 0; ix < 50; ix++) {
			randomArray.push(getRandomOpacity());
		}
		setInterval(() => {
			randomArray = [];
			for (let ix = 0; ix < 50; ix++) {
				randomArray.push(getRandomOpacity());
			}
		}, 500);
	});

	function getRandomOpacity() {
		const ran = Math.random();
		if (ran < 0.3) {
			return 0;
		} else {
			return ran - 0.4;
		}
	}

	export { width, height, color, opacity, style };
</script>

<svg
	{width}
	{height}
	style="position: absolute; opacity: {opacity}; {style}"
	transition:fly={{ duration: 150, delay: 120, y: '50%' }}
	viewBox="0 0 831 363"
	fill-opacity="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M346.199 95.6218L380.91 35.5L450.333 35.5L485.044 95.6218L450.333 155.744L380.91 155.744L346.199 95.6218Z"
		fill-opacity={randomArray[48]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[1]}
	/>
	<path
		d="M346.199 127.622L380.91 67.5L450.333 67.5L485.044 127.622L450.333 187.744L380.91 187.744L346.199 127.622Z"
		fill-opacity={randomArray[47]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[2]}
	/>
	<path
		d="M416.199 95.6218L450.91 35.5L520.333 35.5L555.044 95.6218L520.333 155.744L450.91 155.744L416.199 95.6218Z"
		fill-opacity={randomArray[45]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[3]}
	/>
	<path
		d="M276.199 95.6218L310.91 35.5L380.333 35.5L415.044 95.6218L380.333 155.744L310.91 155.744L276.199 95.6218Z"
		fill-opacity={randomArray[44]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[4]}
	/>
	<path
		d="M346.199 143.622L380.91 83.5L450.333 83.5L485.044 143.622L450.333 203.744L380.91 203.744L346.199 143.622Z"
		fill-opacity={randomArray[43]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[5]}
	/>
	<path
		d="M346.199 175.622L380.91 115.5L450.333 115.5L485.044 175.622L450.333 235.744L380.91 235.744L346.199 175.622Z"
		fill-opacity={randomArray[42]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[6]}
	/>
	<path
		d="M416.199 143.622L450.91 83.5L520.333 83.5L555.044 143.622L520.333 203.744L450.91 203.744L416.199 143.622Z"
		fill-opacity={randomArray[41]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[7]}
	/>
	<path
		d="M276.199 143.622L310.91 83.5L380.333 83.5L415.044 143.622L380.333 203.744L310.91 203.744L276.199 143.622Z"
		fill-opacity={randomArray[40]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[8]}
	/>
	<path
		d="M96.1991 208.622L130.91 148.5L200.333 148.5L235.044 208.622L200.333 268.744L130.91 268.744L96.1991 208.622Z"
		fill-opacity={randomArray[39]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[9]}
	/>
	<path
		d="M96.1991 240.622L130.91 180.5L200.333 180.5L235.044 240.622L200.333 300.744L130.91 300.744L96.1991 240.622Z"
		fill-opacity={randomArray[38]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[10]}
	/>
	<path
		d="M166.199 208.622L200.91 148.5L270.333 148.5L305.044 208.622L270.333 268.744L200.91 268.744L166.199 208.622Z"
		fill-opacity={randomArray[37]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[11]}
	/>
	<path
		d="M26.1991 208.622L60.9105 148.5L130.333 148.5L165.044 208.622L130.333 268.744L60.9105 268.744L26.1991 208.622Z"
		fill-opacity={randomArray[36]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[12]}
	/>
	<path
		d="M96.1991 256.622L130.91 196.5L200.333 196.5L235.044 256.622L200.333 316.744L130.91 316.744L96.1991 256.622Z"
		fill-opacity={randomArray[34]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[13]}
	/>
	<path
		d="M96.1991 288.622L130.91 228.5L200.333 228.5L235.044 288.622L200.333 348.744L130.91 348.744L96.1991 288.622Z"
		fill-opacity={randomArray[33]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[14]}
	/>
	<path
		d="M166.199 256.622L200.91 196.5L270.333 196.5L305.044 256.622L270.333 316.744L200.91 316.744L166.199 256.622Z"
		fill-opacity={randomArray[32]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[15]}
	/>
	<path
		d="M26.1991 256.622L60.9105 196.5L130.333 196.5L165.044 256.622L130.333 316.744L60.9105 316.744L26.1991 256.622Z"
		fill-opacity={randomArray[31]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[16]}
	/>
	<path
		d="M595.199 208.622L629.91 148.5L699.333 148.5L734.044 208.622L699.333 268.744L629.91 268.744L595.199 208.622Z"
		fill-opacity={randomArray[30]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[16]}
	/>
	<path
		d="M595.199 240.622L629.91 180.5L699.333 180.5L734.044 240.622L699.333 300.744L629.91 300.744L595.199 240.622Z"
		fill-opacity={randomArray[29]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[17]}
	/>
	<path
		d="M665.199 208.622L699.91 148.5L769.333 148.5L804.044 208.622L769.333 268.744L699.91 268.744L665.199 208.622Z"
		fill-opacity={randomArray[28]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[18]}
	/>
	<path
		d="M525.199 208.622L559.91 148.5L629.333 148.5L664.044 208.622L629.333 268.744L559.91 268.744L525.199 208.622Z"
		fill-opacity={randomArray[27]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[19]}
	/>
	<path
		d="M595.199 256.622L629.91 196.5L699.333 196.5L734.044 256.622L699.333 316.744L629.91 316.744L595.199 256.622Z"
		fill-opacity={randomArray[26]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[20]}
	/>
	<path
		d="M595.199 288.622L629.91 228.5L699.333 228.5L734.044 288.622L699.333 348.744L629.91 348.744L595.199 288.622Z"
		fill-opacity={randomArray[25]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[21]}
	/>
	<path
		d="M665.199 256.622L699.91 196.5L769.333 196.5L804.044 256.622L769.333 316.744L699.91 316.744L665.199 256.622Z"
		fill-opacity={randomArray[24]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[22]}
	/>
	<path
		d="M525.199 256.622L559.91 196.5L629.333 196.5L664.044 256.622L629.333 316.744L559.91 316.744L525.199 256.622Z"
		fill-opacity={randomArray[23]}
		fill={color}
		stroke={color}
		stroke-opacity={randomArray[22]}
	/>
</svg>

<style>
	path {
		transition: all cubic-bezier(0.77, 0, 0.175, 1) 0.5s;
	}
</style>
