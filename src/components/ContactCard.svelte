<script>
	import Label from './Label.svelte';
	import Button from './Button.svelte';
	import isMobile from '../fn/isMobile';

	let color = '#6100FF';
	let left = '0%';
	let logo;
	let onButtonAction;
	let buttonLabel = '';
	let primaryLabel = '';
	let buttonHref = '';
	let primaryLabelDesktopFontSize = '20px';

	export {
		color,
		left,
		primaryLabel,
		logo,
		buttonLabel,
		onButtonAction,
		buttonHref,
		primaryLabelDesktopFontSize
	};
</script>

<div class="contactContainer" style="left: {left}; background-color: {color}20;">
	<div
		style="width: 98%; height: 98%; position: absolute; border: solid 4px {color}; border-radius: 15px;"
	/>
	<div
		style="width: 100%; height: 100%; position: absolute; backdrop-filter: blur(10px); border-radius: 15px;"
	/>
	<Label
		text={primaryLabel}
		{color}
		desktopFont={primaryLabelDesktopFontSize}
		verticalFont="14px"
		width="100%"
		height="50%"
		style="text-align: center;"
		top={isMobile() ? '45%' : '23%'}
		left="0%"
	/>
	<a href={buttonHref} target={buttonHref != '' ? '_blank' : ''}>
		<Button
			onClick={onButtonAction}
			width={isMobile() ? '100%' : '80%'}
			height={isMobile() ? '100%' : '20%'}
			label={buttonLabel}
			color={isMobile() ? '#00000000' : color}
			borderColor={isMobile() ? '#00000000' : color}
			backgroundColor={isMobile() ? '#00000000' : `${color}20`}
			borderRadius="5px"
			top={isMobile() ? '0%' : '65%'}
			left={isMobile() ? '0%' : '50%'}
			style="{isMobile() ? '' : 'transform: translate(-50%);'} text-align: center;"
			desktopFont="20px"
			verticalFont="0px"
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
		border-radius: 20px;
	}
</style>
