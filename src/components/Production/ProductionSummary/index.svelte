<script>
  import { logoHeight } from "../../../stores/dims";
  import { rwdState } from "../../../stores/rwd";
  export let production;
  const { title } = production;
  $: fillerHeight = $rwdState === "xs" ? 1 : $logoHeight;
</script>

<style>
  h1 {
    font-family: "Montserrat", sans-serif;
  }
  p {
    font-family: Courier, monospace
  }
</style>

<div class="production-summary">
  {#if !!fillerHeight}
    <div style={`height: ${fillerHeight}px`} />
    <div class="px-4">
      <h1 class="uppercase text-5xl tracking-widest text-black">{title}</h1>
      <p>
        4.48 Psychosis is een zinderende gedachtestroom die probeert om de pijn
        en de angst voor het leven te beschrijven maar tegelijk ook het leven
        bezingt, en de wil om te leven omwille van de liefde. Wegens succes
        hernomen.
      </p>
    </div>
  {/if}
</div>
