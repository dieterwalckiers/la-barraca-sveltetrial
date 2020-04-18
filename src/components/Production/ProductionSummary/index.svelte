<script>
  import FromToInfo from "./FromToInfo.svelte";
  import CallToAction from "./CallToAction.svelte";
  import { logoHeight } from "../../../stores/dims";
  import { rwdState } from "../../../stores/rwd";
  import { trailerCarouselIndex } from "../../../stores/productionDisplayInfo";
  export let production;
  const { title, performanceCalendar, shortDescription } = production;
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
  .production-summary {
    font-family: Courier, monospace;
  }

  .short-description {
    white-space: pre-wrap;
    overflow: auto;
    max-height: 160px;
  }
</style>

<div class="production-summary">
  {#if !!fillerHeight}
    <div style={`height: ${fillerHeight}px`} />
    <div class="px-4">
      <h1 class="uppercase text-5xl tracking-widest text-black mb-3">
        {title}
      </h1>
      {#if !!firstPerformance}
        <FromToInfo
          class="mb-3"
          from={firstPerformance.date}
          to={lastPerformance.date} />
      {/if}
      <p class="short-description">
        {@html shortDescription}
      </p>
      {#if $trailerCarouselIndex > -1}
        <CallToAction />
      {/if}
    </div>
  {/if}
</div>
