<script>
  
  import { viewportWidth } from "../stores/rwd";
  // import Nav from '../components/Nav.svelte';
  // export let segment;
</script>

<style>
  .siteWrapper {
    width: 100vw;
    overflow: hidden;
  }
</style>

<!-- <Nav {segment}/> -->

<svelte:window bind:innerWidth={$viewportWidth} />

<main>
  <div class="siteWrapper">
    <slot />
  </div>
</main>
