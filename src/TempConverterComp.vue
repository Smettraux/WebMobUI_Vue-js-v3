<script>
  import InputNumber from './InputNumber.vue';
  import {ref, computed} from 'vue';

  export default {
    components: {
      InputNumber
    },

    setup() {
      const tempSi = ref(0);

      const kelvin = computed({
        get: () => tempSi.value,
        set: val => tempSi.value = val
      });

      const celsius =  computed({
        get: () => tempSi.value - 273.15,
        set: val => tempSi.value = val + 273.15
      });

      const fahrenheit =  computed({
         get: () => tempSi.value * 1.8 - 459.67,
         set: val => tempSi.value = (val + 459.67) / 1.8
      });

      const cl = () => console.log("my test catched");

      return { kelvin, celsius, fahrenheit, cl };
    }
  }
</script>

<template>
  <input-number label="Kelvin" deco="K" @my-test="cl"></input-number>
  <input-number label="Celsius" deco="°C"></input-number>
  <input-number label="Fahrenheit" deco="°F"></input-number>
</template>

<style>

</style>