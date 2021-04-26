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
