<script>
  import { carouselHeight, fillerHeight } from "../../../stores/dims";
  export let isInvertedColors;
</script>

<style>
  .is-inverted {
    background-color: #4a1928;
  }
</style>

<div>
  {#if !!$fillerHeight}
    <div style={`height: ${$fillerHeight}px`} />
    <div
      class="reservation-form transition-colors duration-500 text-lb-light"
      class:is-inverted={isInvertedColors}
      style={`height: ${$carouselHeight}px`} />
  {/if}
</div>
