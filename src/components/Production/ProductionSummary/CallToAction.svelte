<script>
  import {
    requestedCarouselIndex,
    trailerCarouselIndex,
    isSecondaryMode
  } from "../../../stores/productionDisplayInfo";
  $: goToTrailer = () => {
    requestedCarouselIndex.set($trailerCarouselIndex);
    isSecondaryMode.set(false);
  };
</script>

<div class="calltoaction mt-4 ml-6">
  {#if $isSecondaryMode}
    <div>
      {@html '&gt;'}
      <label
        class="transition-colors hover:text-lb-primary-font cursor-pointer"
        on:click={() => isSecondaryMode.set(false)}>
        Bekijk de foto's
      </label>
    </div>
  {/if}
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
