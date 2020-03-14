<script>
  import { rwdState } from "../../stores/rwd";
  import ProductionCarousel from "./ProductionCarousel/index.svelte";
  import ProductionSummary from "./ProductionSummary/index.svelte";
  export let production;
  const { mainImageSrc } = production;

  $: carouselWidth = $rwdState === "xs" ? 100 : $rwdState === "sm" ? 50 : 60;
  $: summaryWidth =
    $rwdState === "xs"
      ? 100
      : !!carouselWidth
      ? 100 - carouselWidth
      : undefined;
</script>

<div class="production w-full sm:flex">
  <div style={`width: ${carouselWidth}%`}>
    <ProductionCarousel {production} />
  </div>
  <div style={`width: ${summaryWidth}%`}>
    <ProductionSummary {production} />
  </div>
</div>
