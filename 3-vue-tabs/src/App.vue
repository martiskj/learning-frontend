<template>
  <div id="app">

    <div class="heading">
      <img src="@/assets/some-website-white.svg" alt="">
      <h1 class="title">Some Website</h1>
    </div>

    <tabs>

      <tab name="Home">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis qui in, facere obcaecati doloremque, maxime et provident ullam ducimus illum iure culpa perspiciatis nulla quia odit? Dolore alias inventore doloremque?</p>
      </tab>

      <tab name="Products" :selected="true">
        <p>This section is for products</p>
      </tab>

      <tab name="About">
        <p>About us page goes here</p>
      </tab>

    </tabs>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue'
import Tab from '@/components/Tab.vue'

@Component({
  components: {
    Tabs,
    Tab
  },
})
export default class App extends Vue {}
</script>

<style>

  :root {
    --color-background: #061838;
    --color-primary: white;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro';
    font-size: 1.2rem;
  }

  body {
    background: var(--color-background);
    height: 100vh;
    margin: 0;
    padding: 0;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  #app {
    padding: 50px;
    color: var(--color-primary);
  }

  #app a {
    color: var(--color-primary);
  }

  .app-title {
    color: var(--color-primary);
    text-align: center;
    padding-bottom: 30px;
  }

  .heading {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    justify-content: center;
  }

  .heading img {
    height: 15px;
    margin-right: 10px;
  }

  .heading h1 {
    color: var(--color-primary);
  }

</style>