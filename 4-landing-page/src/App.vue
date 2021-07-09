<template>
  <div id="app">

    <div>

      <Navigation />
      <div class="products-menu">
        <ul>
          <li><a href="#" class="active">All Products</a></li>
          <li><a href="#">Landing Pages</a></li>
          <li><a href="#">Dashboards</a></li>
          <li><a href="#">Components</a></li>
        </ul>
      </div>


    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';

@Component({
  components: {
    Navigation
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
$primary: #444F60;
$secondary: #7218cc;

body {
  background-color: #F5F6FA;
}

a {
  color: $primary;
  text-decoration: none;
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
}

.products-menu {
  display: flex;
  justify-content: center;
  margin-top: 50px;

  ul {
    list-style: none;
    
    li {
      display: inline-block;

      a {
        letter-spacing: 0px;
        font-size: 0.85rem;
        padding: 10px 25px;
        color: #A2A2A2;
        border-radius: 20px;

        &.active {
          font-weight: bold;
          color: white;
          background-color: $secondary;
          box-shadow: rgba(0,0,0,0.3) 0px 4px 8px;
        }

        &:hover:not(.active) {
          background-color: white;
        }
      }
    }
  }
}

</style>
