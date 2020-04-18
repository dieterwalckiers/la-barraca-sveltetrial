<style>
  .button {
    background-image: linear-gradient(
      135deg,
      gray 8.33%,
      transparent 8.33%,
      transparent 50%,
      gray 50%,
      gray 58.33%,
      transparent 58.33%,
      transparent 100%
    );
    background-size: 8.49px 8.49px;
    width: calc(100% - 1.5rem);
    margin-left: 1.5rem; /* this equals tailwinds ml-6 */
    font-family: Courier, monospace;
  }
  .button > div {
    background-color: #d1d1d1;
    margin: 5px;
  }
</style>

<div
  class="button flex items-center justify-center flex items-center
  justify-center cursor-pointer">
  <div
    class="w-full h-full flex items-center justify-center p-2 text-2xl
    text-lb-primary-font hover:text-lb-primary-font-lighter">
    reserveer nu
  </div>
</div>
