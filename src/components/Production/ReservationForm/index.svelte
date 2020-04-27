<script>
  import { carouselHeight, fillerHeight } from "../../../stores/dims";
  import { isSecondaryMode, bookerInfo } from "../../../stores/productionDisplayInfo";
  let clazz;
  export { clazz as class };
</script>

<style>
  .secondary-mode {
    background-color: #4a1928;
  }
  h2 {
    font-family: Courier, monospace;
  }
</style>

<div class={clazz}>
  {#if !!$fillerHeight}
    <div style={`height: ${$fillerHeight}px`} />
    <div
      class="reservation-form transition-colors duration-500 text-lb-light p-12"
      class:secondary-mode={$isSecondaryMode}
      style={`height: ${$carouselHeight}px`}>
      <div class="border-l-2 border-lb-light w-full h-full p-12 text-white">
        <h2 class="text-2xl">Reserveer je tickets</h2>
      </div>
    </div>
  {/if}
</div>
