<template>
  <div class="v-select" @click="visibleOptions($event)">
    <div class="current__select">
      <p class="title">{{selectedCurrency.sign}}</p>
      <span class="icon" :class="optionsVisible ? 'focus' : ''"></span>
    </div>
    <div class="options" v-if="optionsVisible">
      <p v-for="option in options" :key="option.value" @click.stop="selectOption(option)">{{option.name}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "v-select",
  props: {
    options: {
      type: Array,
      default () {
        return []
      }
    },
    selectedCurrency: {
      type: Object,
      default() {
        return {
          name: "Name",
          sign: "S",
          country: "Country",
          id: 1
        };
      }
    }
  },
  data() {
      return {
        optionsVisible: false,
      }
  },
  methods: {
    visibleOptions(e) {
      this.optionsVisible = !this.optionsVisible
    },
    selectOption(option) {
      this.$emit('select-current', option)
    },
    hideOptions() {
      this.optionsVisible = false
    }
  },
  mounted() {
    document.addEventListener('click', this.hideOptions, true)
    console.log(this.selectedCurrency)
  },
  destroy() {
    document.removeEventListener('click', this.hideOptions)
  }
}
</script>

<style lang="scss">

.v-select{
  position: relative;
  cursor: pointer;
  margin-right: 20px;
}

.current__select {
  position: relative;
  .icon {
    background-image: url('../assets/images/arrow_down.svg');
    background-repeat: no-repeat;
    font-size: 28px;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    right: -30px;
    transform: rotate(90deg);
    transition: all .3s ease-in-out;
    &.focus {
      transition: all .3s ease-in-out;
      transform: rotate(0deg);
    }
  }
}

.v-select p{
  margin: 0;
  cursor: pointer;
  padding: 0 8px;
}

.options {
  border: 1px solid #ccc;
  border-radius: 5px;
  position: absolute;
  top: 100%;
  background: #fff;
  & p:not(:last-child){
    border-bottom: 1px solid #ccc;
  }
  & p:hover {
    background: #e7e7e7;
  }
}

</style>