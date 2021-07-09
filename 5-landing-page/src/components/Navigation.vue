<template>
    <nav class="navigation">
        <div class="app-margin content">
            <h1>LOGO</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Video</a></li>
                <li><a href="#">FAQ's</a></li>
                <li><a href="#" class="as-button">Pre-order now</a></li>
            </ul>
        </div>

    </nav>
  
</template>

<script>

import { Component, Vue } from 'vue-property-decorator';

@Component()
export default class Navigation extends Vue {

}
</script>

<style lang="scss">

.navigation {
  background-color: $color-background;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  font-family: $font-primary;

  ul {
    list-style: none;
    display: flex;

    li {
      margin: 20px;
      text-transform: uppercase;

      a {
        color: $color-primary;
        text-decoration: none;
        font-size: .8em;
        font-weight: bold;
        transition: .3s ease-in-out;

        &:hover:not(.as-button) {
          color: $color-active;
        }
      }
    }
  }
}
</style>