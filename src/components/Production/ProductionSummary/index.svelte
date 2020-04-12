<script>
  import FromToInfo from "./FromToInfo.svelte";
  import { logoHeight } from "../../../stores/dims";
  import { rwdState } from "../../../stores/rwd";
  export let production;
  const { title, performanceCalendar } = production;
  $: performanceCalendarAvailable =
    performanceCalendar && performanceCalendar.length;
  $: firstPerformance = performanceCalendarAvailable && performanceCalendar[0];
  $: lastPerformance =
    performanceCalendarAvailable &&
    performanceCalendar[performanceCalendar.length - 1];
  $: fillerHeight = $rwdState === "xs" ? 1 : $logoHeight;
</script>

<style>
  h1 {
    font-family: "Montserrat", sans-serif;
  }
  p {
    font-family: Courier, monospace;
  }
</style>

<div class="production-summary">
  {#if !!fillerHeight}
    <div style={`height: ${fillerHeight}px`} />
    <div class="px-4">
      <h1 class="uppercase text-5xl tracking-widest text-black mb-3">{title}</h1>
      {#if !!firstPerformance}
        <FromToInfo class="mb-3" from={firstPerformance.date} to={lastPerformance.date} />
      {/if}
      <p>
        4.48 Psychosis is een zinderende gedachtestroom die probeert om de pijn
        en de angst voor het leven te beschrijven maar tegelijk ook het leven
        bezingt, en de wil om te leven omwille van de liefde. Wegens succes
        hernomen.
      </p>
    </div>
  {/if}
</div>
