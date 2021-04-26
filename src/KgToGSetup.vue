<script>
import { ref, computed } from "vue";

export default {
  setup(props) {
    const kg = ref(0);
    const g = computed(() => kg.value * 1000);
    const updateKg = (event) => (kg.value = event.target.value);
    return { kg, g, updateKg };
  },
};
</script>

<template>
  <div>
    <input @input="updateKg" type="number" :value="kg"> [Kg] 
  </div>
  <div>
    {{ g }} [g]
  </div>
  <span v-if="kg > 1000"> C'est lourd !</span>
</template>

<style scoped>
span {
  color: tomato;
}
</style>