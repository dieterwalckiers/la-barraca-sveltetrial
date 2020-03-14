<script>
  import { rwdState } from "../../../stores/rwd";
  import { carouselImgWidth } from "../../../stores/dims";
  export let src;
  $: console.log(
    "rendering ProductionImage with src",
    src,
    "and viewportWidth",
    $rwdState
  );
  $: imageWidth = $rwdState === "xs" ? 500 : 900;
  let clientWidth;
  $: carouselImgWidth.set(clientWidth);
</script>

<div bind:clientWidth={clientWidth}>
  <img src={`${src}?w=${imageWidth}`} alt="" />
</div>
