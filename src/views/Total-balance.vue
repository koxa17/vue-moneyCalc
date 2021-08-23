<template>
  <section class="total">
    <div class="total__header">
      <h3>Баланс</h3>
      <div class="total__balance">0
        <div class="box">
          <select name="currency" id="select" >
            <option v-for="(currency, key) of currencies" :value="currency.name" :key="currency.id">{{ currency.sign }}</option>
          </select>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


import {mapGetters} from "vuex";

export default {
  name: "total-balance",
  components: {},
  props: {},
  data(){
    return {
      currencies: {}
    }
  },
  mounted() {
    this.currencies = this.GET_ALL_CURRENCIES()
    console.log(this.currencies)
  },
  methods: {
    ...mapGetters([
        'GET_ALL_CURRENCIES'
    ])
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
  font-size: 28px;
  font-weight: bold;
}

.total__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box {
  display: inline;
  position: relative;
}


.box select {
  //background-color: #0563af;
  color: black;
  border: none;
  font-size: 28px;
  width: 50px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
}

.box::before {
  content: "\f13a";
  background-image: url('../assets/images/arrow_down.svg');
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 35px;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.1);
  pointer-events: none;
  transform: rotate(0deg);
}

.box select:hover {
  cursor: pointer;
}

.box select option {
  padding: 30px;
}
</style>
