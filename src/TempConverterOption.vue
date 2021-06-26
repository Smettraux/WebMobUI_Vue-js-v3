<script>
  export default {
    data() {
      return {
        tempSi: ''
      }
    },

    watch: {
      async tempSi(nVal, oldVal) {
        if (nVal < 0) {
          this.tempSi = 0;
        }
      }
    },

    computed: {
      kelvin: {
        get() {
          return this.tempSi;
        },
        set(val) {
          this.tempSi = val === '' ? '' : parseFloat(val);
        }
      },
      celsius: {
        get() {
          return this.tempSi === '' ? '' : this.tempSi - 273.15;
        },
        set(val) {
          this.tempSi = val === '' ? '' : parseFloat(val) + 273.15;
        }
      },
      fahrenheit: {
        get() {
          return this.tempSi === '' ? '' : this.tempSi * 1.8 - 459.67;
        },
        set(val) {
         this.tempSi = val === '' ? '' : (parseFloat(val) + 459.67) / 1.8;
        }
      }
    },

    methods: {
      round(val) {
        return val === '' ? '' : parseFloat(val.toFixed(2));
      }
    }

  }
</script>

<template>
  <div>
    <label>Kelvin</label>
    <input type="number" :value="round(kelvin)" @input="kelvin = $event.target.value">
    <label>Celsius</label>
    <input type="number" :value="round(celsius)" @input="celsius = $event.target.value">
    <label>Fahrenheit</label>
    <input type="number" :value="round(fahrenheit)" @input="fahrenheit = $event.target.value">
  </div>
</template>

<style>
  div {
    display: grid;
  }
  div > * {
    font-size: 1.5rem;
    margin: 0 0 1rem 0;
  }
</style>