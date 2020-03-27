<script>
  import Button from "./Button.svelte";
  let clazz;
  export let style;
  export { clazz as class };
  export let toPrev;
  export let toNext;
</script>

<div class={`carousel-navigation text-white ${clazz}`} {style}>
  <Button on:click={toPrev} />
  <Button isRightControl={true} on:click={toNext} />
</div>
