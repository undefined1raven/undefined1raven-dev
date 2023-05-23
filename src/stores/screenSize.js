import { writable } from "svelte/store"

const root = document.documentElement;

const screenSize = writable({ width: root.clientWidth, height: root.clientHeight });

export default screenSize;