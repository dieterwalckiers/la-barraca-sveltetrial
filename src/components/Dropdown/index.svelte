<script>
  import { onMount } from "svelte";
  export let items;
  export let onSelect;
  export let selectedValue;
  let isExpanded;

  let eventListener;
  function swap() {
    isExpanded = !isExpanded;
  }

  $: selectedItem = items && items.length && items.find(item => item.value === selectedValue);
  $: selectedLabel = (selectedItem && selectedItem.label) || "";

</script>

<div class="w-full cursor-pointer">
  <div class="border border-white h-10 flex items-center px-2 w-full" on:click={swap}>{selectedLabel}</div>
  {#if isExpanded}
    <div class="border border-t-0 border-white w-full">
      {#each items as item}
        <div class="h-10 w-full px-2 flex items-center" on:click={(evt) => { onSelect(item.value); swap(); }}>{item.label}</div>
      {/each}
    </div>
  {/if}
</div>