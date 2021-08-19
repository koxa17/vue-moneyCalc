<template>
  <div>
    <costs/>
    <income/>
  </div>
</template>

<script>
import Costs from "./Costs";
import Income from "./Income";
export default {
  name: 'Finance-journal',
  components: {Income, Costs},
  props: {}
}
</script>

<style>

</style>