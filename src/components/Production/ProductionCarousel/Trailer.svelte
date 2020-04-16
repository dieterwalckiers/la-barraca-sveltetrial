<script>
  export let vimeoId;
</script>

<div style="padding:56.25% 0 0 0;position:relative;">
  <iframe
    title="trailer"
    src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0`}
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    frameborder="0"
    allow="autoplay; fullscreen"
    allowfullscreen />
</div>
