import {ref, createApp} from 'vue';
import TempConv from 'TempConverter.vue';
import KgToGSetup from'KgToGSetup.vue';

const app = createApp(TempConv).mount('#app');

// const x = ref(2);
// console.log(x.value);




// setTimeout(() => {
//   app.kg = 10;
// }, 2000);

// setTimeout(() => {
//   app.kg = 0.1;
// }, 4000);


// let x2 = 2;
// let y = x + 2

// const x = ref(2);
// const y = computed(() => x.value + 2); //calcul réactif

// watch(x, (newVal, oldVal) => {
//   console.log(`${oldVal} => ${newVal}`);
// }, {flush: 'sync'});

// x.value = 3;
// x.value = 3;
// x.value = 5;
// console.log(y.value);