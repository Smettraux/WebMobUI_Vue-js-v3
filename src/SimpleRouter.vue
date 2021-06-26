<script>
  import {ref} from 'vue';
  import LitreConverter from 'LitreConverter.vue';
  import TempConverter from 'TempConverter.vue';
  import Schedule from 'Schedule.vue';

  const routes = [
    {
      href: '#schedule',
      component: 'Schedule',
      label: 'IM Schedule'
    }, {
      href: '#temperature',
      component: 'TempConverter',
      label: 'Temperature converter'
    }, {
      href: '#litre',
      component: 'LitreConverter',
      label: 'Litre converter'
    }
  ];

  export default {
    components: {TempConverter, LitreConverter, Schedule},

    setup() {
      const currentComponent = ref('Schedule');
      window.addEventListener('popstate', () => {
        const route = routes.find(route => route.href === window.location.hash);
        if (!route) return;
        currentComponent.value = route.component;
      });
      return {currentComponent, routes};
    }

  }
</script>

<template>
  <nav>
    <ul>
      <li v-for="route of routes" :key="route.href">
        <a :href="route.href" :class="{active: currentComponent === route.component }">{{ route.label }}</a>
      </li>
    </ul>
  </nav>
    <main>
    <keep-alive>
      <transition name="fade" mode="out-in">
        <component :is="currentComponent"></component>
      </transition>
    </keep-alive>
    </main>
</template>

<style scoped>
  a {
    color: black;
  }
  a.active, a:hover {
    color:tomato
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .5s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
</style>