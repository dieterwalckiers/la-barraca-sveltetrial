<script>
  import { rwdState } from "../../stores/rwd";
  import ProductionCarousel from "./ProductionCarousel/index.svelte";
  import ProductionSummary from "./ProductionSummary/index.svelte";
  import ReservationForm from "./ReservationForm/index.svelte";
  export let production;
  const { mainImageSrc } = production;

  $: carouselWidth = $rwdState === "xs" ? 100 : $rwdState === "sm" ? 50 : 60;
  $: summaryWidth =
    $rwdState === "xs"
      ? 100
      : !!carouselWidth
      ? 100 - carouselWidth
      : undefined;
  let isReservationFormShown = false;
  $: productionMargin =
    $rwdState === "xs"
      ? 0
      : $rwdState === "sm"
      ? isReservationFormShown
        ? "-50vw"
        : "50vw"
      : isReservationFormShown
      ? "-60vw"
      : "60vw";
</script>

<style>
  .production {
    transition: margin 0.5s;
  }
</style>

<div
  class="production md:flex overflow-hidden"
  style={`margin-left: ${productionMargin}`}>
  <div style={`width: ${carouselWidth}vw`}>
    <ProductionCarousel {production} />
  </div>
  <div style={`width: ${summaryWidth}vw`}>
    <ProductionSummary
      {production}
      on:showReservationForm={() => {
        isReservationFormShown = true;
      }}
      isInvertedColors={isReservationFormShown} />
  </div>
  <div style={`width: ${carouselWidth}vw`}>
    <ReservationForm isInvertedColors={isReservationFormShown} />
  </div>
</div>
