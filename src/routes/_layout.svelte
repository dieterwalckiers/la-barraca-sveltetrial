<script>
  
  import { viewportWidth } from "../stores/rwd";
  // import Nav from '../components/Nav.svelte';
  // export let segment;
</script>

<style>
  .siteWrapper {
    max-width: 1200px;
    margin: auto;
    border: 1px solid fuchsia;
  }
</style>

<!-- <Nav {segment}/> -->

<svelte:window bind:innerWidth={$viewportWidth} />

<main>
  <div class="siteWrapper">
    <slot />
  </div>
</main>
