<template>
  <section class="journal journal__costs">
    <div class="journal__title">
      <h3>{{options.listName}}</h3>
      <span class="journal__currency">{{options.moneyCurrency.name}}</span>
    </div>
    <ul class="journal__list">
      <li class="journal__item journal__item-minus">
        Сегодня
        <span class="journal__money">0 {{options.moneyCurrency.sign}}</span>
        <!--           <button class="journal_delete">x</button>-->
      </li>
      <li class="journal__item journal__item-minus">
        Неделя
        <span class="journal__money">0 {{options.moneyCurrency.sign}}</span>
      </li>
      <li class="journal__item journal__item-minus">
        Месяц
        <span class="journal__money">0 {{options.moneyCurrency.sign}}</span>
      </li>
    </ul>
    <button class="btn btn__costs" @click="$emit('to-form')">Добавить {{options.listName}}</button>
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
        required: true
      },
      moneyCurrency: {
        type: Object,
        default: () => ({name: 'ГРН', sign: '₴', country: 'Украина'})
      },
    }
  },
}
</script>

<style scoped>

</style>