<script>
  import InputNumber from './InputNumber.vue';
  import {ref, watch, nextTick, computed} from 'vue';

  export default {
    components: {
      InputNumber
    },

    setup() {
      const tempSi = ref(0);

      watch(tempSi, async t => {
        if (t < 0) {
          await nextTick();
          tempSi.value = 0;
        }
      });

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
      const cl = e => console.log(e.target.value === 'Amélie');
      return {kelvin, celsius, fahrenheit, cl};
    }
  }
</script>

<template>
  <div>
    <input-number label="Kelvin" deco="K" :value="kelvin" @update:value="kelvin = $event"></input-number>
    <input-number label="Celsius" deco="°C" :value="celsius" @update:value="celsius = $event"></input-number>
    <input-number label="Fahrenheit" deco="°F" :value="fahrenheit" @update:value="fahrenheit = $event"></input-number>
  </div>
</template>

<style>

</style>