import {computed} from 'vue'

export default function (collection, filter) {

  const filterCollection = computed(() => collection.value.filter(filter));

  return { filterCollection };

}