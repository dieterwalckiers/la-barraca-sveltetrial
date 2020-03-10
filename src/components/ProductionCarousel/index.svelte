<script>
  import Production from "./Production/index.svelte";
  export let productions;
</script>

<div>
  <Production production={productions[0]} />
</div>
