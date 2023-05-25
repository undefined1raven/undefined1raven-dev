import { writable } from "svelte/store";


const globalTheme = writable({ primary: '#6100FF', secondary: '#35008B', gradientColorPrimary: 'rgba(97, 0, 220, 0.2)', gradientColorSecondary: 'rgba(53, 0, 122, 0.1)' });

export default globalTheme;