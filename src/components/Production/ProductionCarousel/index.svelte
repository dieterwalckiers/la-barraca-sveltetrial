<script>
  import Siema from "siema";
  import { onMount } from "svelte";

  import { rwdState } from "../../../stores/rwd";
  import ProductionImage from "./ProductionImage.svelte";
  import LbLogoBig from "../LbLogoBig/index.svelte";
  import CarouselNavigation from "./CarouselNavigation/index.svelte";

  let siema;
  let controller;

  export let production;
  const { mainImageSrc, imageSrcs, vimeoId } = production;
  $: console.log("prod", production);
  $: hasNarrowBorders = ["xs", "sm"].includes($rwdState);

  onMount(() => {
    controller = new Siema({
      selector: siema,
      loop: true
    });
    return () => {
      controller.destroy();
    };
  });
</script>

<style>
  .border1-wide:before {
    content: "";
    position: absolute;
    background-color: #4a1928;
    width: 259px;
    height: 15px;
    top: -15px;
  }
  .border1-narrow:before {
    content: "";
    position: absolute;
    background-color: #4a1928;
    width: 50%;
    height: 0.5rem;
    top: -0.5rem;
  }
  .border2-wide:before {
    content: "";
    position: absolute;
    background-color: #4a1928;
    width: 15px;
    height: 50%;
    top: -15px;
    left: -15px;
  }
  .border2-narrow:before {
    content: "";
    position: absolute;
    background-color: #4a1928;
    width: 0.5rem;
    height: 50%;
    top: -0.5rem;
    left: -0.5rem;
  }
  .carousel {
    position: relative;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
</style>

<div class="production-carousel">
  <LbLogoBig />
  <div
    class="relative bg-black"
    class:border1-narrow={hasNarrowBorders}
    class:border1-wide={!hasNarrowBorders}>
    <div
      class:border2-narrow={hasNarrowBorders}
      class:border2-wide={!hasNarrowBorders}>
      <div class="carousel" bind:this={siema}>
        <div>
          <ProductionImage src={mainImageSrc} />
        </div>
        {#each imageSrcs as imageSrc}
          <div>
            <ProductionImage src={imageSrc} />
          </div>
        {/each}
      </div>
    </div>
    <CarouselNavigation
      class="absolute"
      style="bottom: -25px; right: -20px"
      toPrev={e => {
        controller.prev();
        e.stopPropagation();
      }}
      toNext={e => {
        controller.next();
        e.stopPropagation();
      }} />
  </div>
</div>

<div style="height: 900px" />
