<script>
  import {
    requestedCarouselIndex,
    trailerCarouselIndex
  } from "../../../stores/productionDisplayInfo";
  $: goToTrailer = () => {
    requestedCarouselIndex.set($trailerCarouselIndex);
  };
</script>

<div class="calltoaction mt-4 ml-6">
  <div>
    {@html '&gt;'}
    <label class="transition-colors hover:text-lb-primary-font cursor-pointer" on:click={goToTrailer}>Bekijk de trailer</label>
  </div>
  <div>
    {@html '&gt;'}
    <label>Lees meer</label>
  </div>
</div>
