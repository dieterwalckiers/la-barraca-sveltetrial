<script>
  import { onMount } from "svelte";
  import { viewportWidth } from "../stores/rwd";
  // import Nav from '../components/Nav.svelte';
  // export let segment;
</script>

<!-- <Nav {segment}/> -->

<svelte:window bind:innerWidth={$viewportWidth} />

<main>
  <slot />
</main>
