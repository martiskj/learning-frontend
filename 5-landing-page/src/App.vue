<template>
  <div id="app">

    <Navigation />
    <Hero />
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from './components/Navigation.vue';
import Hero from './components/Hero.vue';

@Component({
  components: {
    Navigation,
    Hero
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-primary;
}

</style>
