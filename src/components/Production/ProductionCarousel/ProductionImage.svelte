<script>
  import { rwdState } from "../../../stores/rwd";
  export let src;
  $: console.log(
    "rendering ProductionImage with src",
    src,
    "and viewportWidth",
    $rwdState
  );
  $: imageWidth = $rwdState === "xs" ? 640 : 900;
  $: hasNarrowBorders = ["xs", "sm"].includes($rwdState);
  let clientWidth;
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
</style>

<div
  class:border1-narrow={hasNarrowBorders}
  class:border1-wide={!hasNarrowBorders}
  bind:clientWidth>
  <div
    class:border2-narrow={hasNarrowBorders}
    class:border2-wide={!hasNarrowBorders}>
    <img src={`${src}?w=${imageWidth}`} alt="" />
  </div>
</div>
