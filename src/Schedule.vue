<script>
  import fetchCollection from './composables/fetchCollection.js';
  import {ref, computed, watch} from 'vue';
  import {dateToHours, dateToFrCh} from './util/date.js';

  export default {

    props: {
      url: {default: 'https://chabloz.eu/files/horaires/all.json'}
    },

    setup(props) {
      const filterBy = ref('');
      const classFilter = ref('IM48');
      const showHist = ref(true);
      const { collection: courses } = fetchCollection(props.url);

      const classes = computed(() => new Set(courses.value.map(c => c.class)));

      const coursesFiltered = computed(
        () => {
          const now = showHist.value ? '' : (new Date()).toISOString();
          let data =  courses.value.filter(c => c.start > now); //history filter
          data = data.filter(c => c.class == classFilter.value); // Class filter
          data.sort((c1, c2) => c1.start.localeCompare(c2.start)); //sort by start date
          return data;
        }
      )

      const coursesToShow = computed(() => coursesFiltered.value.filter(c => {
        return c.label.toLowerCase().includes(filterBy.value.toLowerCase());  // Label filter
      }));

      const coursesName = computed(() => new Set(coursesFiltered.value.map(c => c.label)));

      watch(coursesName, () => filterBy.value = '');

      return {classes, classFilter, coursesName, coursesToShow, filterBy, showHist, dateToHours, dateToFrCh};
    }
  }
</script>

<template>
  <div>
    <section>
      <button v-for="(theClass, index) of classes" :key="index" @click="classFilter = theClass" :class="{highlight: classFilter === theClass}">
        {{ theClass }}
      </button>
    </section>
    <fieldset>
      <label for="filter-course">Filtrer par cours</label>
      <select v-model="filterBy">
        <option value=""></option>
        <option v-for="(course, index) of coursesName" :key="index" :value="course">
          {{ course }}
        </option>
      </select>
    </fieldset>
    <fieldset>
      <label for="show-hist">Afficher l'historique</label>
      <input id="show-hist" type="checkbox" v-model="showHist">
    </fieldset>
    <table>
      <tr v-for="(entity, index) of coursesToShow" :key="entity.id" :class="{highlight: index%2}">
        <td class="class">{{ entity.class }}</td>
        <td class="date">{{ dateToFrCh(entity.start) }}</td>
        <td class="hours">{{ dateToHours(entity.start) }} - {{ dateToHours(entity.end) }}</td>
        <td class="course">{{ entity.label }}</td>
        <td class="room">{{ entity.room }}</td>
      </tr>
    </table>
  </div>
</template>

<style scopped>
  div {
    display: grid;
    place-items: center;
    font-family: monospace;
    max-width: 32rem;
    margin: 0 auto;
  }
  button {
    display: inline-block;
    margin: 1rem;
    padding: 0.3rem 0;
    min-width: 4rem;
    background: white;
    border: solid black 1px;
    cursor: pointer;
  }
  fieldset {
    border: none;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  td {
    padding: 0.2rem 0.5rem;
    border: solid black 1px;
  }
  .highlight {
    background: #eff;
  }
</style>