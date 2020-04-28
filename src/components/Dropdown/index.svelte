<script>
  export let values;
  let isExpanded;

  function swap() {
    isExpanded = !isExpanded;
  }
</script>

<div class="w-full">
  <div class="border border-white h-10 flex items-center px-2" on:click={swap}>yo</div>
</div>
