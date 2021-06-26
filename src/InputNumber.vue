<script>
import {ref, computed, watch} from 'vue';



  export default {
    props: {
      'value': {default: ''},
      'label': {type: String, required: true},
      'deco': {type: String},
      'toFixed': {type: Number, default: 2}
    },

    emits: [
      'update:value'
    ],

    setup(props, context) {
      const round = val => {
        if (val === '') return '';
        return parseFloat((val).toFixed(props.toFixed).toString());
      };
      const updateValue = (event) => {
        let val = event.target.value;
        if (val === '') return;
        val = parseFloat(val);
        context.emit('update:value', val);
      };
      return {round, updateValue};
    }
  }
</script>

<template>
  <div>
    <label>{{ label }}</label>
    <input type="number" :value="round(value)" @input="updateValue">
    <span v-show="deco">{{ deco }}</span>
  </div>
</template>

<style scoped>
  label {grid-area: label}
  input {grid-area: input}
  span  {grid-area: deco}
  div {
    display: grid;
    width: 12rem;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "label label"
      "input deco"
    ;
  }
  div * {
    font-size: 1.4rem;
    margin: 0 0 0.3rem 0;
    user-select: none;
  }
  input {
    font-size: 1.3rem;
    border: solid 1px #777;
    border-width: 1px;
  }
  span {
    font-size: 1.3rem;
    border: solid 1px #777;
    background-color: #ddd;
    padding: 0 0.5rem;
    border-width: 1px 1px 1px 0;
    min-width: 1.5rem;
    display: grid;
    place-items: center;
  }

</style>