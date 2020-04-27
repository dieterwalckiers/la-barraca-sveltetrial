<script>
  import { rwdState } from "../../stores/rwd";
  import { isSecondaryMode } from "../../stores/productionDisplayInfo";
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
  $: productionMargin =
    $rwdState === "xs"
      ? 0
      : $rwdState === "sm"
      ? $isSecondaryMode
        ? "calc(-50vw + 6rem)"
        : "50vw"
      : $isSecondaryMode
      ? "calc(-60vw + 6rem)"
      : "60vw";
</script>

<style>
  .production {
    transition: margin 0.5s;
  }
</style>

<div
  class="production md:flex overflow-hidden pb-8"
  style={`margin-left: ${productionMargin};`}>
  <div style={`width: ${carouselWidth}vw`}>
    <ProductionCarousel {production} class="ml-12" />
  </div>
  <div style={`width: ${summaryWidth}vw`}>
    <ProductionSummary {production} />
  </div>

  <div style={`width: ${carouselWidth}vw`}>
    <ReservationForm class="mr-24" />
  </div>

</div>
