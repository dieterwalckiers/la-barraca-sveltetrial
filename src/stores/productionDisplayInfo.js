import { writable } from "svelte/store";

export const isSecondaryMode = writable(false);
export const trailerCarouselIndex = writable(-1);
export const requestedCarouselIndex = writable(-1);

export const bookerInfo = writable({
  performanceIndex: 0,
  name: "",
  email: "",
  remarks: "",
});
