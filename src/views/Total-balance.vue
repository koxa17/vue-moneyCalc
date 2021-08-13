<template>
  <section class="total">
    <div class="total__header">
      <h3>Баланс</h3>
      <p class="total__balance">0 ₴</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'total-balance',
  props: {
  },
}
</script>

<style lang="scss">
.total {
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 25px;
}

.total__balance {
  font-size: 28px;
  font-weight: bold;
}

.total__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>