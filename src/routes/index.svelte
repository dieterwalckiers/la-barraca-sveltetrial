<script context="module">
  import client from "../sanityClient";
  import { normalizeSeason } from "../helpers/normalizing";

  export async function preload({ params, query }) {
    try {
      const season = await client.fetch(`
        *[_type == "season"][0] {
          startYear,
          endYear,
          "productions": productions[]{
            title,
            "mainImageSrc": mainImage{asset->{url}}.asset.url,
            "imageSrcs": images[]{asset->{url}}.asset.url
          }
        }`);
      return {
        season: normalizeSeason(season)
      };
    } catch (err) {
      this.error(500, err);
    }
  }
</script>

<script>
  import ProductionCarousel from "../components/ProductionCarousel/index.svelte";
  export let season;
  const { productions } = season;
</script>

<svelte:head>
  <title>La Barraca theater-op-schoot</title>
</svelte:head>
<h1 class="font-bold text-red-900">La Barraca theater-op-schoot</h1>
<ProductionCarousel {productions} />
