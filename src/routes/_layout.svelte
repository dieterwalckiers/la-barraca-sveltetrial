<script>
  import { onMount } from "svelte";
  import { viewportWidth } from "../stores";
  // import Nav from '../components/Nav.svelte';
  // export let segment;

  // function syncRwdState() {
  //   const { innerWidth } = window;
  //   rwdState.setFromViewportWidth(innerWidth);
  // }

  // onMount(async () => {
  //   console.log("setting from", innerWidth);
  //   syncRwdState();
  // });
</script>

<!-- <Nav {segment}/> -->

<svelte:window bind:innerWidth={$viewportWidth} />

<main>
  <slot />
</main>
