<script>
  import DateBox from "./DateBox.svelte";
  export let from;
  export let to;
  let clazz;
  export { clazz as class };
</script>

<div class={`flex items-center text-lb-primary-font ${clazz}`}>
  <DateBox date={from} />
  <span class="mx-3">{@html "&gt;"}</span>
  <DateBox date={to} />
</div>
