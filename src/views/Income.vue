<template>
  <transition name="flip" mode="out-in">
    <keep-alive>
        <component
            :is="currentComponent"
            :config="config"
            :options="options"
            @add-operation="handlerAdding"
            @cancel-operation="handlerCancel"
            @to-form="toForm">
        </component>
    </keep-alive>
  </transition>
</template>

<script>

export default {
  name: 'Income',
  data() {
    return {
      fomData: {},
      currentComponent: 'Finance-list',
      options: {
        listName: 'Доход',
        moneyCurrency: {
          name: 'RUB', sign: '₽', country: 'Россия'
        },
        classes: {
          btn: 'btn__income',
          journal: 'journal__item-plus'
        },
      },
      config: {
        operationsName: 'Доход',
        btnCancel: true,
        classBtn: {addBtn: 'add-income', cancelBtn: 'cancel-costs'},
      }
    }
  },
  methods: {
    handlerCancel() {
      this.currentComponent = 'Finance-list'
    },
    handlerAdding() {
      console.log('adding work')
    },
    toForm() {
      this.currentComponent = 'Form'
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
    cursor: pointer;
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

.flip-enter-active {
  transition: all 0.2s ease-in-out; //ease-in-quad
}

.flip-leave-active {
  transition: all 0.25s ease-in-out; //ease-out-quad
}

.flip-enter-from,
.flip-leave-to {
  transform-origin: 50% 50%;
  transform: scale3d(1, 1, 1) rotateY(90deg) rotateZ(0deg) translate3d(0px, 0px, 0px);
  opacity: 0;
}

</style>