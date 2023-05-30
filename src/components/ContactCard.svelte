<script>
	import Label from './Label.svelte';
	import Button from './Button.svelte';

	let color = '#6100FF';
	let left = '0%';
	let logo;
	let onButtonAction;
	let buttonLabel = '';
	let primaryLabel = '';
	let buttonHref = '';
    let primaryLabelDesktopFontSize = '20px';

	export { color, left, primaryLabel, logo, buttonLabel, onButtonAction, buttonHref, primaryLabelDesktopFontSize };
</script>

<div class="contactContainer" style="left: {left}; background-color: {color}20;">
    <div style="width: 98%; height: 98%; position: absolute; border: solid 4px {color}"></div>
    <div style="width: 100%; height: 100%; position: absolute; backdrop-filter: blur(5px);"></div>
	<Label
		text={primaryLabel}
		{color}
		desktopFont="{primaryLabelDesktopFontSize}"
		width="100%"
		style="text-align: center;"
		top="40%"
		left="0%"
	/>
	<a href={buttonHref} target={buttonHref != '' ? '_blank' : ''}>
		<Button
			onClick={onButtonAction}
			width="80%"
			height="20%"
			label={buttonLabel}
			{color}
			borderColor={color}
			backgroundColor="{color}20"
			borderRadius="5px"
			top="65%"
			left="50%"
			style="transform: translate(-50%); text-align: center;"
			desktopFont="20px"
		/>
	</a>
	<svelte:component
		this={logo}
		{color}
		size="12vh"
		style="top: 10%; width: 7vh; height: 5vh;"
		class="logoContainer"
	/>
</div>

<style>
	:global(.logoContainer) {
		position: absolute;
		top: 4%;
		width: 100%;
		height: 20%;
		display: flex;
		align-items: center;
		justify-content: center;
		left: 0%;
	}
	.contactContainer {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 30.777777778%;
		height: 100%;
		border-radius: 15px;
	}
</style>
