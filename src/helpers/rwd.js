export function rwdStateFromViewportWidth(viewportWidth) {
  console.log("calc for", viewportWidth);
  if (!viewportWidth || isNaN(viewportWidth)) {
    return undefined;
  }
  if (viewportWidth < 640) {
    return "xs";
  }
  if (viewportWidth < 768) {
    return "sm";
  }
  if (viewportWidth < 1024) {
    return "lg";
  }
  return "xl";
}

