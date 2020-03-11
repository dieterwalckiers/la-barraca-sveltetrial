import { writable, derived } from "svelte/store";
import { rwdStateFromViewportWidth } from "./helpers/rwd";

export const viewportWidth = writable(360);
export const rwdState = derived(viewportWidth, $viewportWidth =>
  rwdStateFromViewportWidth($viewportWidth)
);
