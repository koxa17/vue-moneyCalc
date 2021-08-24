<template>
  <div class="v-select">
    <p class="title" @click="optionsVisible = !optionsVisible">Select</p>
    <div class="options" v-if="optionsVisible">
      <p v-for="option in options" :key="option.value" @click="selectOption(option)">{{option.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  props: {
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data() {
      return {
        optionsVisible: false,
      }
  },
  methods: {
    selectOption(option) {
      console.log(option)
    },
    hideOptions() {
      this.optionsVisible = false
    }
  },
  mounted() {
    document.addEventListener('click', this.hideOptions, true)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideOptions)
  }
}
</script>

<style lang="scss">

.v-select{
  position: relative;
}

.title {
  border: 1px solid #eaeaea;
}

.v-select p{
  margin: 0;
  cursor: pointer;
}

.options {
  border: 1px solid #eaeaea;
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  background: #fff;
  & p:hover {
    background: #e7e7e7;
  }
}

</style>