<template>
    <div>
      <total-balance />
      <finance-journal />
      <total-btn />
    </div>
</template>

<script>

import FinanceJournal from "./Finance-journal";
import TotalBalance from "./Total-balance";
import TotalBtn from "./Total-btn";
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "Main",
  components: {TotalBtn, TotalBalance, FinanceJournal},
  data() {
    return {
      data: {},
    };
  },
  async mounted() {
    await this.GET_ALL_JOURNAL_FOR_FIREBASE()
    this.data = this.GET_ALL_JOURNAL()
  },
  methods: {
    ...mapActions([
        'GET_ALL_JOURNAL_FOR_FIREBASE'
    ]),
    ...mapGetters([
      'GET_ALL_JOURNAL',
      'GET_LIST_INCOMES',
      'GET_LIST_COSTS',
    ])
  }
};
</script>

<style lang="scss">
main {
  margin-top: 30px;
}

.journal {
  margin-top: 40px;
}

.journal__title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}

.journal__currency {
  font-style: italic;
  color: #b1b1b1;
}

.journal__item {
  align-items: center;
  background-color: #fff;
  border-width: 1px;
  border-left: 10px;
  border-right: 10px;
  border-style: solid;
  border-radius: 10px;
  color: gray;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 0;
  line-height: 25px;
  &:hover {
    cursor: pointer;
    color: black;
  }
}

.journal__item-plus {
  border-left-color: darkgreen;
  border-right-color: darkgreen;
}

.journal__item-minus {
  border-left-color: #ff2700;
  border-right-color: #ff2700;
}

.journal__money {
  flex: 1;
  text-align: right;
  padding-right: 10px;
  color: black;
}

.journal_delete {
  background-color: transparent;
  color: red;
  padding: 0 10px;
  border-width: 0;
  font-size: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;
}

.journal__item:hover .journal_delete {
  opacity: 1;
}
.all {
  display: flex;
  margin-bottom: 50px;
  margin-top: 50px;
  align-items: center;
  justify-content: space-around;
}

.btn__all {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  &:hover {
    cursor: pointer;
  }
}

.image__all {
  width: 80px;
  margin-bottom: 10px;
}

.all__name {
  font-family: Roboto, sans-serif;
  font-size: 16px;
}
</style>
