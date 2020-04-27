import { writable, derived } from "svelte/store";
import { rwdState } from "./rwd";

export const carouselHeight = writable(0);
export const carouselWidth = writable(0);

export const logoHeight = derived(carouselWidth, ($carouselWidth) =>
  Math.round($carouselWidth * 0.4486)
);

export const fillerHeight = derived(
  [rwdState, logoHeight],
  ([$rwdState, $logoHeight]) => ($rwdState === "xs" ? 1 : $logoHeight)
);
