<template>
  <transition name="flip" mode="out-in">
    <keep-alive>
      <component
        :is="currentComponent"
        :config="config"
        :options="options"
        @add-operation="handlerAdding"
        @cancel-operation="handlerCancel"
        @to-form="toForm"
      >
      </component>
    </keep-alive>
  </transition>
</template>

<script>
export default {
  name: "Costs",
  data() {
    return {
      currentComponent: "Finance-list",
      options: {
        listName: "Расход",
        moneyCurrency: {
          name: "RUB",
          sign: "₽",
          country: "Россия",
        },
        classes: {
          btn: "btn__costs",
          journal: "journal__item-minus",
        },
      },
      config: {
        operationsName: {
          name: "cost",
          value: "Расход"
        },
        btnCancel: true,
        classBtn: { addBtn: "add-costs", cancelBtn: "cancel-costs" },
      },
    };
  },
  methods: {
    handlerCancel() {
      this.currentComponent = "Finance-list";
    },
    handlerAdding(data) {
      console.log("adding work");
      this.currentComponent = "Finance-list";
    },
    toForm() {
      this.currentComponent = "Form";
    },
  },
};
</script>

<style lang="scss">
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

.add-costs {
  background: #ff2700;
  color: white;
  border-color: #ff2700;

  &:hover {
    color: #ff2700;
    background: #fff;
  }
}

.flip-enter-active {
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53); //ease-in-quad
  transform-origin: 50% 50%;
}

.flip-leave-active {
  transform-origin: 50% 50%;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94); //ease-out-quad
}

.flip-enter-from,
.flip-leave-to {
  transform-origin: 50% 50%;
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}
</style>
