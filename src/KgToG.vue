<script>
  export default {
    data() {
      return {
        kg: 1
      }
    },

    computed: {
      g() {
        return this.kg * 1000;
      },
      isHeavy() {
        return this.kg >= 100;
      }
    },

    methods: {
      updateKg(event) {
        this.kg = event.target.value;
      }
    }

  }
</script>

<template>
  <div>
    <input @input="updateKg" type="number" :value="kg"> [Kg]
  </div>
  <div>
    {{ g }} [g]
  </div>
  <span v-if="isHeavy"> C'est lourd !</span>
</template>

<style scoped>
  span {
    color: tomato;
  }
</style>