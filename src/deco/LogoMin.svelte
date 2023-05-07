<script>
	import { scale } from 'svelte/transition';
	let size = '2vh';
	let style = "";
	let color = "#2400FF";

	export { size, style, color };
</script>


<svg width="{size}" height="{size}" style="position: absolute; {style}" viewBox="0 0 52 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.10554" y="30.6127" width="35.0285" height="35.0285" transform="rotate(-45 1.10554 30.6127)" stroke={color}/>
<rect x="1.18172" y="36.2166" width="35.0285" height="35.0285" transform="rotate(-45 1.18172 36.2166)" stroke={color}/>
<rect x="1.0406" y="25.8093" width="35.0285" height="35.0285" transform="rotate(-45 1.0406 25.8093)" stroke={color}/>
</svg>
