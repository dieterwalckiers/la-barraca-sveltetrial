<script>
  import { rwdState } from "../../../stores/rwd";
  export let src;
  $: imageWidth = $rwdState === "xs" ? 640 : 900;
  let width;
  $: console.log("prodimg width", width);
  $: height = width && parseInt(width * 0.66);
</script>

<style>
  .prodimg {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>

<div
  class="prodimg"
  style={`width: 100%; ${height ? `height:${height}px; ` : ''}background-image: url("${src}?w=${imageWidth}")`}
  bind:clientWidth={width}>
  &nbsp;
</div>
