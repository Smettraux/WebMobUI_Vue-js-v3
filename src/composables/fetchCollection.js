import {ref, onMounted} from 'vue'

export default function (url) {

  const collection = ref([]);

  const fetchCollection = async () => {
    const resp = await fetch(url);
    collection.value = await resp.json();
    return true;
  };

  onMounted(fetchCollection);

  return {
    collection,
    fetchCollection
  };

}