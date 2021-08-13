<template>
  <Form v-if="addition" :config="{operationsName: 'Расход',btnCancel: true, classBtn: {addBtn: 'add-costs', cancelBtn: 'cancel-costs'}}" @adding-operation="" @cancel-operation="handlerCancel" />
  <section class="journal journal__costs" v-else>
    <div class="journal__title">
      <h3>Расходы</h3>
      <span class="journal__currency">RUB</span>
    </div>
      <ul class="journal__list">
        <li class="journal__item journal__item-minus">
          Сегодня
          <span class="journal__money">0 ₴</span>
<!--           <button class="journal_delete">x</button>-->
        </li>
        <li class="journal__item journal__item-minus">
          Неделя
          <span class="journal__money">0 ₴</span>
        </li>
        <li class="journal__item journal__item-minus">
          Месяц
          <span class="journal__money">0 ₴</span>
        </li>
      </ul>
      <button class="btn btn__costs" @click="addition = true">Расход</button>
  </section>

</template>

<script>

export default {
  name: 'Costs',
  data() {
    return {
      addition: false,
      fomData: {}
    }
  },
  methods: {
    handlerCancel() {
      this.addition = false
    },
    handlerAdding() {
      console.log()
    }
  }
}
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

.btn__costs {
  color: #ff2700;
  font-size: 18px;
  font-weight: bold;
  border-color: #ff2700;
  cursor: pointer;

  &:hover {
    color: white;
    background: #ff2700;
  }
}

.add-costs{
  background: #ff2700;
  color: white;
  border-color: #ff2700;
  &:hover {
    color: #ff2700;
    background: #fff;
  }
}
.cancel-costs{}

</style>