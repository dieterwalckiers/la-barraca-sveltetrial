<script>
  import ProductionImage from "./ProductionImage.svelte";
  import LbLogoBig from "../../LbLogoBig/index.svelte";
  export let production;
  export let width;
  const { mainImageSrc } = production;
</script>

<div class="prodution-carousel" style={`width: ${width}%`}>
  <ProductionImage src={mainImageSrc} />
</div>
