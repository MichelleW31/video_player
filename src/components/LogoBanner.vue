<template>
  <div class="logo-banner">
    <div class="logo-wrapper">
      <Logo />
    </div>
    <h2>VIDEO PLAYER</h2>
  </div>
</template>

<script>
import Logo from './icons/Logo.vue'

export default {
  name: 'LogoBanner',
  components: {
    Logo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo-banner {
    background: #393c3e;
    padding: 86px 0;
  }

  .logo-wrapper {
    margin: 0 auto;
    padding-bottom: 35px;
    width: 30%;
  }

  h2 {
    color: #fff;
    font-family: BrandonRegular, Arial, sans-serif;
    font-size: 3rem;
    letter-spacing: 4px;
  }

  @media (min-width: 900px) {
    .logo-banner {
      align-items: center;
      display: flex;
      padding: 70px 0;
    }

    .logo-wrapper {
      margin: 0 30px 0 80px;
      padding-bottom: 0;
      width: 14%;
    }

    h2 {
      font-size: 1.4rem;
    }
  }

</style>
