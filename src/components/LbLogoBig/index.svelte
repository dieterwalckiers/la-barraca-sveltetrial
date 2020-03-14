<script>
  import logo from "./logo.svg";
  import { carouselImgWidth } from "../../stores/dims";

  $: console.log("carouselImgWidth is", $carouselImgWidth);
</script>

<style>
  div {
    fill: #e3effc;
  }
</style>

{#if !!$carouselImgWidth}
  <div style={`width: ${$carouselImgWidth}px`}>
    {@html logo}
  </div>
{/if}
