<script>
  import Siema from "siema";
  import Trailer from "./Trailer.svelte";
  import { onMount } from "svelte";

  import { rwdState } from "../../../stores/rwd";
  import { carouselHeight, carouselWidth } from "../../../stores/dims";
  import {
    trailerCarouselIndex,
    requestedCarouselIndex
  } from "../../../stores/productionDisplayInfo";
  import ProductionImage from "./ProductionImage.svelte";
  import LbLogoBig from "../LbLogoBig/index.svelte";
  import CarouselNavigation from "./CarouselNavigation/index.svelte";

  let siema;
  let controller;

  export let production;
  const { mainImageSrc, imageSrcs, vimeoId } = production;
  $: console.log("prod", production);
  $: hasNarrowBorders = ["xs", "sm"].includes($rwdState);

  $: trailerCarouselIndex.set(vimeoId ? 1 + (imageSrcs || []).length : -1);
  $: if ($requestedCarouselIndex !== -1) {
    controller.goTo($requestedCarouselIndex);
    requestedCarouselIndex.set(-1);
  }

  onMount(() => {
    controller = new Siema({
      selector: siema,
      loop: true
    });
    try {
      // hack because css didn't seem to cut it
      document
        .getElementsByClassName("carousel")[0]
        .getElementsByTagName("div")[0].style.display = "flex";
      document
        .getElementsByClassName("carousel")[0]
        .getElementsByTagName("div")[0].style.height = "100%";
      document
        .getElementsByClassName("carousel")[0]
        .getElementsByTagName("div")[0].style.alignItems = "center";
    } catch (e) {
      console.error("trailer styling failed. No trailer defined?");
    }

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
  .carousel div {
    display: flex !important;
    align-items: center !important;
    height: 100% !important;
  }
</style>

<div class="production-carousel pl-12">
  <LbLogoBig />
  <div
    class="relative bg-black"
    class:border1-narrow={hasNarrowBorders}
    class:border1-wide={!hasNarrowBorders}>
    <div
      class:border2-narrow={hasNarrowBorders}
      class:border2-wide={!hasNarrowBorders}>
      <div
        class="carousel"
        bind:this={siema}
        bind:clientHeight={$carouselHeight}
        bind:clientWidth={$carouselWidth}>
        <div>
          <ProductionImage src={mainImageSrc} />
        </div>
        {#each imageSrcs as imageSrc}
          <div>
            <ProductionImage src={imageSrc} />
          </div>
        {/each}
        {#if !!vimeoId}
          <Trailer {vimeoId} />
        {/if}
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

