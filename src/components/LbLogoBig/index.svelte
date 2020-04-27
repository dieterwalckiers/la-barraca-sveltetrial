<script>
  import logo from "./logo.svg";
  import { carouselWidth } from "../../stores/dims";
</script>

<style>
  div {
    fill: #e3effc;
  }
</style>

<div class="absolute left-0 ml-12" style={`width: ${$carouselWidth}px`}>
  {@html logo}
</div>
