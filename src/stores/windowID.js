import { writable } from "svelte/store";

let windowID = writable('projects');

export default windowID;