import { writable } from "svelte/store";


const globalTheme = writable({ primary: '#6100FF', secondary: '#35008B' });

export default globalTheme;