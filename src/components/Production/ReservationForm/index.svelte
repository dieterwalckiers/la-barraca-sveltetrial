<script>
  import { carouselHeight, fillerHeight } from "../../../stores/dims";
  import {
    isSecondaryMode,
    bookerInfo
  } from "../../../stores/productionDisplayInfo";
  import Dropdown from "../../Dropdown/index.svelte";
  import { ddItemFromPerformance, buildNumberOfTicketsItems } from "./helpers";
  let clazz;
  export { clazz as class };
  export let production;
  const { performanceCalendar } = production;
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
      class="reservation-form transition-colors duration-500 text-lb-light px-12 py-6"
      class:secondary-mode={$isSecondaryMode}
      style={`height: ${$carouselHeight}px`}>
      <div class="border-l-2 border-lb-light w-full h-full p-12 text-white">
        <h2 class="text-3xl">Reserveer je tickets</h2>
        <div class="flex">
          <div style="flex-grow: 2" class="mr-4">
            <div class="mt-4">
              <div class="my-2">Voorstelling</div>
              <Dropdown
                items={performanceCalendar.map(ddItemFromPerformance)}
                selectedValue={$bookerInfo.performanceIndex}
                onSelect={(index) => bookerInfo.set({...$bookerInfo, performanceIndex: index})}
              />
            </div>
          </div>
          <div style="flex-grow: 1">
            <div class="mt-4">
              <div class="my-2">Aantal</div>
              <Dropdown
                items={buildNumberOfTicketsItems()}
                selectedValue={$bookerInfo.numberOfTickets}
                onSelect={(value) => bookerInfo.set({...$bookerInfo, numberOfTickets: value})}
              />
            </div>
          </div>
        </div>
        <div class="flex">
          <div style="flex-grow: 1" class="mr-4">
            <div class="mt-4">
              <div class="my-2">Naam</div>
              <input type="text" class="border border-white h-10 flex items-center px-2 w-full bg-transparent" bind:value={bookerInfo.name} />
            </div>
          </div>
          <div style="flex-grow: 1">
            <div class="mt-4">
              <div class="my-2">Email</div>
              <input type="text" class="border border-white h-10 flex items-center px-2 w-full bg-transparent" bind:value={bookerInfo.email} />
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="mt-4 w-full">
            <div class="my-2">Opmerkingen</div>
            <textarea rows="3" class="border border-white flex items-center px-2 w-full bg-transparent" bind:value={bookerInfo.remarks} />
          </div>
        </div>
        <div class="w-full flex justify-end pt-4">
          <button class="py-1 px-6 bg-white text-lb-primary tracking-wider font-bold">IK RESERVEER</button>
        </div>
      </div>
    </div>
  {/if}
</div>