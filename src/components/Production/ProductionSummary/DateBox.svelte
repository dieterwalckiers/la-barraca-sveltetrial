<script>
  export let date;
  import { nameMonth } from "../../../helpers/normalizing";
  $: [day, month, year] = [
    date.format("DD"),
    nameMonth(date.format("MM")).substring(0, 4),
    date.format("YYYY")
  ];
</script>

<style>
  .date {
    font-family: courier;
  }
  .day {
    font-size: 29px;
  }
  .rest {
    font-size: 11px;
  }
</style>

<div class="date flex items-center text-lb-primary-font font-bold">
  <div class="day mr-1">{day}</div>
  <div class="rest leading-tight">
    <div class="uppercase">{month}</div>
    <div class="uppercase">{year}</div>
  </div>
</div>
