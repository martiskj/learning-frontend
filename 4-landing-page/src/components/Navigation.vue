<template>

  <nav class="navigation">

      <div class="logo">
        <img src="https://cssninja.io/themes/cssninja/assets/images/logo/cssninja.svg" />
      </div>

      <div class="menu">
        <ul>
          <li><a href="#" class="active">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>

      <div class="login">
        <a href="#">Login</a>
        <a href="#" class="signup">Signup</a>
      </div>
    </nav>

</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component()
export default class Navigation extends Vue {

}
</script>

<style scoped lang="scss">
a {
  letter-spacing: 2px;
  text-decoration: none;

  &.active {
    color: #7218cc;
    border-top: 3px solid #7218cc;
  }
}

.navigation {
  width: 1150px;
  height: 50px;
  display: flex;
  align-items: center;

  .logo {
    flex: 1;

    img {
      height: 45px;
    }
  }

  .menu {
    flex: 1;

    ul {
      list-style: none;

      li {
        display: inline-block;
        margin: 0 16px;

        
      }
    }
  }

  .login {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      margin-left: 16px;
    }

    .signup {
      color: white;
      background-color: #7218cc;
      padding: 10px 30px;
      border-radius: 10px;
      letter-spacing: 0px;
    }

  }
}
</style>