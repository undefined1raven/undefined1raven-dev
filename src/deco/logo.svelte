<script>
	import { scale } from 'svelte/transition';
	let size;
	let id;
	let style;
	let show;
	let color;

	export { size, style, id, show, color };
</script>

{#if show}
	<svg
		transition:scale={{ duration: 100 }}
		id={id ? id : ''}
		width={size ? size : '5vh'}
		height={size ? size : '5vh'}
		style={style ? style : ''}
		viewBox="0 0 300 300"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect x="0.5" y="0.5" width="299" height="299" stroke={color ? color : "#2400FF"} />
		<rect
			x="73.9028"
			y="148.838"
			width="107.085"
			height="107.085"
			transform="rotate(-45 73.9028 148.838)"
			stroke={color ? color : "#2400FF"}
		/>
		<rect
			x="74.1312"
			y="165.65"
			width="107.085"
			height="107.085"
			transform="rotate(-45 74.1312 165.65)"
			stroke={color ? color : "#2400FF"}
		/>
		<rect
			x="73.7071"
			y="134.428"
			width="107.085"
			height="107.085"
			transform="rotate(-45 73.7071 134.428)"
			stroke={color ? color : "#2400FF"}
		/>
	</svg>
{/if}
