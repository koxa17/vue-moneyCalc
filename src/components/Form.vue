<template>
  <section class="operation">
    <div class="operation__header">
      <h3 class="operation__header-title">Новый {{ config.operationsName }}</h3>
      <span class="operation__header-currency currency">RUB</span>
    </div>
    <form id="form">
      <label>
        <input
          @model="formData.operation.value"
          name="operation"
          type="text"
          class="operation__fields operation__name"
          :placeholder="placeholder"
        />
      </label>
      <label>
        <input
          @model="formData.money.value"
          name="money"
          type="number"
          class="operation__fields operation__amount"
          placeholder="Введите сумму"
        />
      </label>
      <div class="operation__buttons">
        <button
          type="button"
          class="operation__button operation__button-add"
          :class="config.classBtn.addBtn || null"
          @click="addHandler"
        >
          Добавить {{ config.operationsName }}
        </button>
        <button
          v-if="config.btnCancel"
          type="button"
          class="operation__button operation__button-cancel"
          :class="config.classBtn.cancelBtn || null"
          @click="cancelHandler"
        >
          Отмена
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "Form",
  props: {
    config: {
      operationsName: {
        type: String,
        required: true,
      },
      btnCancel: {
        type: Boolean,
      },
      classBtn: {
        addBtn: {
          type: String,
        },
        cancelBtn: {
          type: String,
        },
      },
    },
  },
  data() {
    return {
      formData: {
        operation: {
          value: "",
        },
        money: {
          value: "",
        },
      },
    };
  },
  methods: {
    addHandler() {
      this.$emit("add-operation");
    },
    cancelHandler() {
      this.$emit("cancel-operation");
    },
  },
  computed: {
    placeholder() {
      return `Наименование ${this.config.operationsName}а`;
    },
  },
};
</script>

<style lang="scss">
.operation {
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: white;
  padding: 15px 15px;
  border: 1px solid #ccc;
  border-radius: 25px;
}

.operation__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;
  margin-bottom: 10px;
}

.operation__fields {
  display: block;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px 15px;
  margin: 5px 0;
  font-size: 16px;
  width: 100%;
  outline: transparent;
}

.operation__fields:focus {
  border: 1px solid darkorange;
}

.operation__button {
  border-width: 2px;
  border-style: solid;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 700;
  padding: 15px 0;
  width: 100%;
  cursor: pointer;
  &-add {
    margin: 15px 0;
  }

  &-cancel {
    background-color: white;
    &:hover {
      background-color: #dddddd;
    }
  }
}
</style>
