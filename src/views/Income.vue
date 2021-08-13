<template>
  <Form v-if="addition" :config="{operationsName: 'Доход',btnCancel: true, classBtn: {addBtn: 'add-income', cancelBtn: 'cancel-costs'}}" @cancel-operation="handlerCancel" />
  <section v-else class="journal journal__income">
    <div class="journal__title">
      <h3>Доходы</h3>
      <span class="journal__currency">RUB</span>
    </div>
    <ul class="journal__list">
      <li class="journal__item journal__item-plus">
        Сегодня
        <span class="journal__money">0 ₴</span>
<!--        <button class="journal_delete">x</button>-->
      </li>
      <li class="journal__item journal__item-plus">
        Неделя
        <span class="journal__money">0 ₴</span>
        <!--        <button class="journal_delete">x</button>-->
      </li>
      <li class="journal__item journal__item-plus">
        Месяц
        <span class="journal__money">0 ₴</span>
        <!--        <button class="journal_delete">x</button>-->
      </li>
    </ul>
    <button class="btn btn__income" @click="addition = true">Добавить доход</button>
  </section>
</template>

<script>
export default {
  name: 'Income',
  data() {
    return {
     addition: false
    }
  },
  methods: {
    handlerCancel() {
      this.addition = false
    }
  }
}
</script>

<style lang="scss">
.btn__income {
  color: #006400;
  font-size: 18px;
  font-weight: bold;
  border-color: #006400;
&:hover {
   color: white;
   background: #006400;
 }
}
.add-income {
  background: #006400;
  border-color: #006400;
  color: white;
  &:hover{
    color: #006400;
    background: none;
  }
}


</style>