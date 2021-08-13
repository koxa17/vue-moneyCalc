<template>
  <section class="operation">
    <h3 v-if="typeOperation === true || typeOperation === false">Новый {{typeOperation ? 'Доход' : 'Расход'}}</h3>
    <h3 v-else>Выберите тип операции</h3>
    <div v-if="typeOperation === true || typeOperation === false">
      <label>
        <input type="text" v-model="operations.operation" class="operation__fields operation__name" placeholder="Наименование операции">
      </label>
      <label>
        <input type="number" v-model.number="operations.money" class="operation__fields operation__amount" placeholder="Введите сумму">
      </label>
      <button class="operation__add" @click="createOperation" :data-income="typeOperation">Добавить операцию</button>
      <button class="operation__add btn__back" @click="changeTypeOperation" :data-income="typeOperation">Назад</button>
    </div>
    <div v-else>
      <button class="operation__add btn__income" @click="changeTypeOperation(true)">Добавить Доход</button>
      <button class="operation__add btn__consumption" @click="changeTypeOperation(false)">Добавить Расход</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Operation',
  data() {
    return {
      operations: {
        operation: '',
        money: '',
        income: '',
      },
      typeOperation: ''
    }
  },
  methods: {
    createOperation() {
       this.$emit('add-operation', this.operations)
      for (const key in this.operations) {
        console.log()
        if(this.operations[key] !== this.operations.income)
        this.operations[key] = ''
      }
    },
    changeTypeOperation(incomeBool = '') {
      this.typeOperation = incomeBool
    }
  },
  watch: {
    typeOperation(newValue) {
      this.operations.income = newValue
    }
  }
}
</script>

<style lang="scss">
.operation {
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: #ddd;
  border-radius: 25px;
  padding: 15px 15px;
}


.operation__fields{
  display: block;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding:  10px 15px;
  margin: 5px 0;
  font-size: 16px;
  width: 100%;
  outline: transparent;
}

.operation__fields:focus{
  border: 1px solid darkorange;
}

.operation__add {
  background-color: darkorange;
  border-width: 2px;
  border-style: solid;
  border-color: darkorange;
  color: #fff;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 700;
  padding: 20px 0;
  width: 100%;
  margin: 15px 0;
  cursor: pointer;
}

.operation__add:hover {
  background-color: white;
  color: darkorange;
}
.btn__income{
  background: #006400;
  border-color: #006400;
  &:hover {
    color: #006400;
  }
}
.btn__consumption{
  background: #ff2700;
  border-color: #ff2700;
  margin-top: 0;
  &:hover {
    color: #ff2700;
  }
}

.btn__back {
  background: gray;
  border-color: gray;
  margin-top: 0;
  &:hover {
    background: darkorange;
    border-color: darkorange;
    color: white;
  }
}
</style>