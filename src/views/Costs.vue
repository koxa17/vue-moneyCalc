<template>
  <div>
<!--    <component is="Form" :config="{operationsName: 'Расход',btnCancel: true, classBtn: {addBtn: 'add-costs', cancelBtn: 'cancel-costs'}}" @adding-operation="" @cancel-operation="handlerCancel"></component>-->
    <FinanceList :options="options"/>
  </div>
</template>

<script>

import Form from "../components/Form";
import FinanceList from "../components/Finance-list";

export default {
  name: 'Costs',
  components: {FinanceList},
  component: {Form, FinanceList},
  data() {
    return {
      addition: false,
      fomData: {},
      component: 'FinanceList',
      options: {
        listName: 'Расход',
        moneyCurrency: {
          name: 'RUB', sign: '₽', country: 'Россия'
        }
      }
    }
  },
  methods: {
    handlerCancel() {
      this.component = 'FinanceList'
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