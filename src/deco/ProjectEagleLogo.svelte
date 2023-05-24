<script>
	import { onMount, onDestroy } from 'svelte';
	let size = '5vh';
	let monochrome = false;
	let style = '';
	let animated = false;

	let opacities = [];
	let interval;
	onMount(() => {
		interval = setInterval(() => {
			opacities = [];
			for (let ix = 0; ix <= 100; ix++) {
				opacities.push(getRandomOpacity());
			}
		}, 500);
	});

	onDestroy(() => {
		clearInterval(interval);
	});

	function getRandomOpacity() {
		if (animated) {
			let random = Math.random();
			if (random > 0.2) {
				return random;
			} else {
				return 0.2;
			}
		}
	}
	export { size, monochrome, style, animated };
</script>

<svg
	width={size}
	height={size}
	class="deco"
	style="position: absolute; {style}"
	viewBox="0 0 300 318"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<rect
		width="103.289"
		height="103.289"
		transform="matrix(0.726571 -0.687092 0.726571 0.687092 75 151.261)"
		fill={monochrome ? '#444' : '#0000FF'}
		fill-opacity="0.01"
		opacity={opacities[0]}
	/>
	<rect
		x="43.8677"
		width="56.6038"
		height="1.3382"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[1]}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(0.726571 -0.687092 0.726571 0.687092 0 39.1887)"
		fill={monochrome ? '#444' : '#0000FF'}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(0.726571 0.687092 -0.726571 0.687092 104.301 1.3383)"
		fill={monochrome ? '#444' : '#0000FF'}
	/>
	<rect
		y="97.6887"
		width="53.5281"
		height="1.41509"
		transform="rotate(-90 0 97.6887)"
		fill={monochrome ? '#444' : '#0000FF'}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 40.0259 139.162)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[5]}
	/>
	<rect
		x="43.8677"
		width="56.6038"
		height="1.3382"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[6]}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(0.726571 -0.687092 0.726571 0.687092 0 39.1887)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[7]}
	/>
	<rect
		width="56.99"
		height="1.37719"
		transform="matrix(0.726571 0.687092 -0.726571 0.687092 104.301 1.3383)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[8]}
	/>
	<rect
		x="298.585"
		y="99.027"
		width="53.5281"
		height="1.41509"
		transform="rotate(-90 298.585 99.027)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[9]}
	/>
	<rect
		x="199.528"
		y="1.3383"
		width="56.6038"
		height="1.3382"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[10]}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(0.726571 -0.687092 0.726571 0.687092 155.661 40.5265)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[11]}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(0.726571 0.687092 -0.726571 0.687092 259.964 2.67641)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[12]}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 299.987 102.65)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[13]}
	/>
	<rect
		width="52.333"
		height="1.37719"
		transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 193.855 141.446)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[14]}
	/>
	<rect
		width="52.333"
		height="1.37719"
		transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 143.741 105.326)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[15]}
	/>
	<rect
		y="255.597"
		width="53.5281"
		height="1.41509"
		transform="rotate(-90 0 255.597)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[16]}
	/>
	<rect
		x="100.459"
		y="298.408"
		width="56.6038"
		height="1.3382"
		transform="rotate(-180 100.459 298.408)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[17]}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 144.327 259.219)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[18]}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 40.0259 297.07)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[19]}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(0.726571 -0.687092 0.726571 0.687092 0 197.097)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[20]}
	/>
	<rect
		width="52.333"
		height="1.37719"
		transform="matrix(0.726571 0.687092 -0.726571 0.687092 105.718 160.585)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[21]}
	/>
	<rect
		x="298.585"
		y="256.935"
		width="53.5281"
		height="1.41509"
		transform="rotate(-90 298.585 256.935)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[22]}
	/>
	<path
		d="M198.114 161.923V160.585H215.095L213.68 161.923H198.114Z"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[23]}
	/>
	<path
		d="M198.114 140.511V141.85H215.095L213.68 140.511H198.114Z"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[24]}
	/>
	<path
		d="M101.886 160.584V159.246H83.49L85.023 160.584H101.886Z"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[25]}
	/>
	<path
		d="M101.886 140.511V141.85H84.9051L86.3202 140.511H101.886Z"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[26]}
	/>
	<path
		d="M157.076 101.703H155.661V85.645L157.076 86.9832V101.703Z"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<path
		d="M142.926 101.703H144.341V85.645L142.926 86.9832V101.703Z"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<path
		d="M157.076 200.731H155.661V216.789L157.076 215.451V200.731Z"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<path
		d="M142.926 200.731H144.341V216.789L142.926 215.451V200.731Z"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		width="52.333"
		height="1.37719"
		transform="matrix(0.726571 -0.687092 0.726571 0.687092 155.661 196.542)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(0.726571 0.687092 -0.726571 0.687092 259.964 160.585)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		x="256.12"
		y="299.746"
		width="56.6038"
		height="1.3382"
		transform="rotate(-180 256.12 299.746)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 299.987 260.558)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		width="56.8487"
		height="1.37719"
		transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 195.687 298.408)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		x="0.726571"
		width="38.9384"
		height="38.9384"
		transform="matrix(0.726571 -0.687092 0.726571 0.687092 121.19 151.055)"
		fill={monochrome ? '#444' : '#0000FF'}
		fill-opacity="0.5"
		stroke={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		width="103.289"
		height="103.289"
		transform="matrix(0.726571 -0.687092 0.726571 0.687092 75 168.658)"
		fill={monochrome ? '#444' : '#0000FF'}
		fill-opacity="0.01"
		opacity={opacities[0]}
	/>
	<rect
		x="43.8677"
		y="17.3967"
		width="56.6038"
		height="1.3382"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(0.726571 -0.687092 0.726571 0.687092 0 56.5851)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(0.726571 0.687092 -0.726571 0.687092 104.301 18.7348)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		y="115.086"
		width="53.5281"
		height="1.41509"
		transform="rotate(-90 0 115.086)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 40.0259 156.558)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		x="43.8677"
		y="17.3967"
		width="56.6038"
		height="1.3382"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(0.726571 -0.687092 0.726571 0.687092 0 56.5851)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		width="56.99"
		height="1.37719"
		transform="matrix(0.726571 0.687092 -0.726571 0.687092 104.301 18.7348)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		x="298.585"
		y="116.424"
		width="53.5281"
		height="1.41509"
		transform="rotate(-90 298.585 116.424)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		x="199.528"
		y="18.7348"
		width="56.6038"
		height="1.3382"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(0.726571 -0.687092 0.726571 0.687092 155.661 57.9234)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(0.726571 0.687092 -0.726571 0.687092 259.964 20.0731)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 299.987 120.046)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		width="52.333"
		height="1.37719"
		transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 193.855 158.843)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		width="52.333"
		height="1.37719"
		transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 143.741 122.723)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		y="272.993"
		width="53.5281"
		height="1.41509"
		transform="rotate(-90 0 272.993)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		x="100.459"
		y="315.805"
		width="56.6038"
		height="1.3382"
		transform="rotate(-180 100.459 315.805)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 144.327 276.616)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 40.0259 314.466)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(0.726571 -0.687092 0.726571 0.687092 0 214.493)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		width="52.333"
		height="1.37719"
		transform="matrix(0.726571 0.687092 -0.726571 0.687092 105.718 177.981)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		x="298.585"
		y="274.332"
		width="53.5281"
		height="1.41509"
		transform="rotate(-90 298.585 274.332)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<path
		d="M198.114 179.319V177.981H215.095L213.68 179.319H198.114Z"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<path
		d="M198.114 157.908V159.246H215.095L213.68 157.908H198.114Z"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<path
		d="M101.886 177.981V176.643H83.49L85.023 177.981H101.886Z"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<path
		d="M101.886 157.908V159.246H84.9051L86.3202 157.908H101.886Z"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<path
		d="M157.076 119.1H155.661V103.042L157.076 104.38V119.1Z"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<path
		d="M142.926 119.1H144.341V103.042L142.926 104.38V119.1Z"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<path
		d="M157.076 218.127H155.661V234.186L157.076 232.847V218.127Z"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<path
		d="M142.926 218.127H144.341V234.186L142.926 232.847V218.127Z"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		width="52.333"
		height="1.37719"
		transform="matrix(0.726571 -0.687092 0.726571 0.687092 155.661 213.939)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(0.726571 0.687092 -0.726571 0.687092 259.964 177.981)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		x="256.12"
		y="317.143"
		width="56.6038"
		height="1.3382"
		transform="rotate(-180 256.12 317.143)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		width="55.0874"
		height="1.37719"
		transform="matrix(-0.726571 0.687092 -0.726571 -0.687092 299.987 277.954)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		width="56.8487"
		height="1.37719"
		transform="matrix(-0.726571 -0.687092 0.726571 -0.687092 195.687 315.805)"
		fill={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
	<rect
		x="0.726571"
		width="38.9384"
		height="38.9384"
		transform="matrix(0.726571 -0.687092 0.726571 0.687092 121.19 168.452)"
		fill={monochrome ? '#444' : '#0000FF'}
		fill-opacity="0.5"
		stroke={monochrome ? '#444' : '#0000FF'}
		opacity={opacities[0]}
	/>
</svg>

<style>
	rect,
	path {
		transition: all linear 0.2s;
	}
</style>
