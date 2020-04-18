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
  {#if $trailerCarouselIndex > -1}
    <div>
      {@html '&gt;'}
      <label
        class="transition-colors hover:text-lb-primary-font cursor-pointer"
        on:click={goToTrailer}>
        Bekijk de trailer
      </label>
    </div>
  {/if}
  <div>
    {@html '&gt;'}
    <label>Lees meer</label>
  </div>
</div>
