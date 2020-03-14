<script>
  import logo from "./logo.svg";
  import { logoHeight } from "../../../stores/dims";
</script>

<style>
  div {
    fill: #e3effc;
  }
</style>

<div bind:clientHeight={$logoHeight}>
  {@html logo}
</div>
