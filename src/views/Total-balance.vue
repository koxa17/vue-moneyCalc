<template>
  <section class="total">
    <div class="total__header">
      <h3>Баланс</h3>
      <div class="total__balance">0
        <v-select :options="currencies" :selected-currency="getCurrentCurrencyToLocalStorage" @select-current="setSelectedCurrency"></v-select>
      </div>
    </div>
  </section>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";
import VSelect from "../components/v-select";

export default {
  name: "total-balance",
  components: {VSelect},
  props: {},
  data(){
    return {
      currencies: {},
      currentCurrency: {},
    }
  },
  mounted() {
    this.currencies = this.GET_ALL_CURRENCIES()
    this.currentCurrency = this.GET_SELECTED_CURRENCY()
  },
  computed:{
    getCurrentCurrencyToLocalStorage() {
      return this.currentCurrency =  this.GET_SELECTED_CURRENCY()
    }
  },
  methods: {
    ...mapGetters([
        'GET_ALL_CURRENCIES',
        'GET_SELECTED_CURRENCY'
    ]),
    ...mapMutations([
      'SET_SELECT_CURRENCY'
    ]),
    setSelectedCurrency(select) {
        this.SET_SELECT_CURRENCY(select)
    },
  },
};
</script>

<style lang="scss">
.total {
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 25px;
}

.total__balance {
  display: flex;
  align-items: center;
}

.total__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
}


.box {
  display: inline;
  position: relative;
}


.box select {
  //background-color: #0563af;
  color: black;
  font-size: 28px;
  width: 70px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  padding: 0 5px;
  border-radius: 10px;
  border-width: 1px;
  border-top: 7px;
  border-bottom: 7px;
  border-style: solid;
  border-color: transparent;
}

.box::before {
  content: "\f13a";
  background-image: url('../assets/images/arrow_down.svg');
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  right: 5px;
  width: 35px;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.1);
  pointer-events: none;
  transform: rotate(0deg);
}

.box select:hover {
  cursor: pointer;
}

select:focus {
  border-color: black;
  border-top-color: #808080;
  border-bottom-color: #808080;
}

.box select option {
  padding: 30px;
}


</style>
