<script>
  import FromToInfo from "./FromToInfo.svelte";
  import CallToAction from "./CallToAction.svelte";
  import { fillerHeight } from "../../../stores/dims";
  import { rwdState } from "../../../stores/rwd";
  import { carouselHeight } from "../../../stores/dims";
  import { isSecondaryMode } from "../../../stores/productionDisplayInfo";
  import ReserveButton from "./ReserveButton.svelte";

  export let production;
  const { title, performanceCalendar, shortDescription } = production;
  $: performanceCalendarAvailable =
    performanceCalendar && performanceCalendar.length;
  $: firstPerformance = performanceCalendarAvailable && performanceCalendar[0];
  $: lastPerformance =
    performanceCalendarAvailable &&
    performanceCalendar[performanceCalendar.length - 1];
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

  .secondary-mode {
    background-color: #4a1928;
    color: #d1d1d1;
    padding-top: 20px;
  }
  .secondary-mode h1 {
    color: #d1d1d1;
  }
</style>

<div class="production-summary">
  {#if !!$fillerHeight}
    <div style={`height: ${$fillerHeight}px`} />
    <div
      class="px-4 flex flex-col justify-between transition-all duration-500"
      class:secondary-mode={$isSecondaryMode}
      style={`height: ${$carouselHeight ? `${$carouselHeight}px` : 'auto'}`}>

      <div>

        <h1 class="uppercase text-5xl tracking-widest text-black mb-3 transition-colors duration-500">
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

        <CallToAction />
      </div>
      <div>
        {#if !$isSecondaryMode}
           <ReserveButton />
        {/if}
      </div>
    </div>
  {/if}
</div>
