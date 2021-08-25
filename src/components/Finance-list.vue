<template>
  <section class="journal journal__costs">
    <div class="journal__title">
      <h3>{{ options.listName }}</h3>
      <span class="journal__currency">{{ selectedCurrency.name }}</span>
    </div>
    <ul class="journal__list">
      <li class="journal__item" :class="options.classes.journal">
        Сегодня
        <span class="journal__money">0 {{ selectedCurrency.sign }}</span>
        <!--           <button class="journal_delete">x</button>-->
      </li>
      <li class="journal__item" :class="options.classes.journal">
        Неделя
        <span class="journal__money">0 {{ selectedCurrency.sign }}</span>
      </li>
      <li class="journal__item" :class="options.classes.journal">
        Месяц
        <span class="journal__money">0 {{ selectedCurrency.sign }}</span>
      </li>
    </ul>
    <button class="btn" :class="options.classes.btn" @click="$emit('to-form')">
      Добавить {{ options.listName }}
    </button>
  </section>
</template>

<script>
export default {
  name: "Finance-list",
  props: {
    options: {
      type: Object,
      listName: {
        type: String,
        required: true,
      },
      classes: {
        type: Object,
      },
    },
    selectedCurrency:{
      type: Object,
      default: () => ({
        name: "RUB",
        sign: "₽",
        country: "Россия",
        id: 1
      }),
    },
  },
};
</script>

<style lang="scss">
.btn {
  padding: 10px;
  line-height: 25px;
  width: 100%;
  border-radius: 10px;
  margin-top: 10px;
  background: white;
}
</style>
