<script>
  import ProductionImage from "./ProductionImage.svelte";
  import ProductionBody from "./ProductionBody.svelte";
  export let production;
  const { mainImageSrc } = production;
</script>

<div>
  <ProductionImage src={mainImageSrc} />
  <ProductionBody {production} />
</div>
