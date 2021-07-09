<template>

  <div class="hero">
    <div class="app-margin app-content">

        <div class="text">
        <h1>Best landing page for product showcase</h1>
        <p>A smartwatch is a wearable computer in the form of a wristwatch modern smartwatches provide a local touchscreen interface for daily use.</p>
        <a href="#" class="as-button">Pre-order now</a>
        </div>

        <div class="image">
        <img src="@/assets/watch-1.png" alt="">
        </div>
    </div>
    </div>

</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component()
export default class Hero extends Vue {

}
</script>

<style lang="scss">
.hero {
  height: calc(100vh - 70px);
  background-color: $color-background-secondary;
  padding-top: 75px;
  color: $color-active;

  .app-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .text {
      font-family: $font-primary;
      flex: 3;
      
      h1 {
        font-size: 35px;
        font-weight: bold;
        text-transform: capitalize;
      }

      p {
        font-size: .9em;
        font-weight: 100;
      }

      a {
        display: inline-block;
        padding: 10px;
        margin-top: 10px;
        font-size: .8em;
        color: white;
        text-decoration: none;
        font-weight: bold;
        text-transform: uppercase;
      }
    }

    .image {
      flex: 2;
      display: flex;
      justify-content: flex-end;

      img {
        width: 80%;
      }
    }

  }
}
</style>