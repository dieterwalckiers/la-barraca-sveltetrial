<script>
  import { rwdState } from "../../../stores";
  export let src;
  $: console.log(
    "rendering ProductionImage with src",
    src,
    "and viewportWidth",
    $rwdState
  );
  $: getImageWidth = () => {
    return $rwdState === "xs" ? 500 : 900;
  };
</script>

<img src={`${src}?w=${getImageWidth()}`} alt="" />
