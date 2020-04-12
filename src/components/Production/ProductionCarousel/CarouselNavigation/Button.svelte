<script>
  import arrow from "./arrow.svg";
  const buttonSize = 70;
  export let isRightControl;
  // $: slotName = `${isRightControl ? "right" : "left"}-control`;
</script>

<style>
  div {
    color: white;
  }
  .pointRight {
    transform: rotate(180deg);
  }
</style>

<div
  class={`color-lb-primary flex items-center justify-center bg-lb-primary hover:bg-lb-primary-lighter cursor-pointer transition-colors duration-300`}
  style={`width: ${buttonSize}px; height: ${buttonSize}px`}
  on:click>
  <label
    class="fill-current cursor-pointer"
    class:pointRight={isRightControl}
    on:click>
    {@html arrow}
  </label>
</div>
