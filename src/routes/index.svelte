<script context="module">
  import client from "../sanityClient";
  import { normalizeSeason } from "../helpers/normalizing";

  export async function preload({ params, query }) {
    console.log("preloading, using normalizeSeason fn of", normalizeSeason);
    try {
      const season = await client.fetch(`
        *[_type == "season"][0] {
          startYear,
          endYear,
          "productions": productions[]{
            title,
            shortDescription,
            "mainImageSrc": mainImage{asset->{url}}.asset.url,
            "imageSrcs": images[]{asset->{url}}.asset.url,
            performanceCalendar,
            vimeoId
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
  import Production from "../components/Production/index.svelte";
  import LbLogoBig from "../components/LbLogoBig/index.svelte";
  export let season;
  console.log("SEASON TO RENDER", season);
  const { productions } = season;
</script>

<svelte:head>
  <title>La Barraca theater-op-schoot</title>
</svelte:head>

<div>
  <div class="flex flex-col items-center p-2 lg:p-0">
    <LbLogoBig />
    <Production production={productions[0]} />
    <div style="height: 900px" />
  </div>

</div>
