<script>
  import ProductionImage from "./ProductionImage.svelte";
  import LbLogoBig from "../LbLogoBig/index.svelte";
  export let production;
  const { mainImageSrc } = production;
</script>

<div class="prodution-carousel">
  <LbLogoBig />
  <ProductionImage src={mainImageSrc} />
</div>
