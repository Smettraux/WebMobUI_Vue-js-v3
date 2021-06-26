<script>
  import InputNumber from './InputNumber.vue';
  import {ref, computed} from 'vue';

  export default {

    components: {
      InputNumber
    },

    setup() {
      const literSi = ref(0);
      const toFixed = 5;

      const liter = computed({
        get: () => literSi.value,
        set: val => literSi.value = val
      });

      const decilitre = computed({
        get: () => literSi.value * 10,
        set: val => literSi.value = val / 10
      });

      const centilitre = computed({
        get: () => literSi.value * 100,
        set: val => literSi.value = val / 100
      });1

      const millilitre = computed({
        get: () => literSi.value * 1000,
        set: val => literSi.value = val / 1000
      });

      return {toFixed, liter, decilitre, centilitre, millilitre};
    }
  }
</script>

<template>
  <div>
    <input-number label="Litre" deco="l" :to-fixed="toFixed" :value="liter" @update:value="liter = $event"></input-number>
    <input-number label="Decilitre" deco="dl" :to-fixed="toFixed" :value="decilitre" @update:value="decilitre = $event"></input-number>
    <input-number label="Centilitre" deco="cl" :to-fixed="toFixed" :value="centilitre" @update:value="centilitre = $event"></input-number>
    <input-number label="Millilitre" deco="ml" :to-fixed="toFixed" :value="millilitre" @update:value="millilitre = $event"></input-number>
  </div>
</template>

<style>

</style>