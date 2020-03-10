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
            "mainImageUrl": mainImage{asset->{url}}.asset.url,
            "imageUrls": images[]{asset->{url}}.asset.url
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
  import Season from "../components/Season.svelte";
  export let season;
</script>

<svelte:head>
  <title>La Barraca theater-op-schoot</title>
</svelte:head>
<h1 class="font-bold text-red-900">La Barraca theater-op-schoot</h1>
<Season {season} />
