<template>
  <page class='hero is-fullheight'>
      <div class='hero-body' slot='content'>
        <div class='container is-hidden-mobile'>
          <img class='titleLogo' src='~@/assets/logo.png' />
          <h1 class='title'>
            Eniverse
          </h1>
          <h2 class='subtitle'>
            Into the next generation
          </h2>
        </div>
        <div class='container is-hidden-desktop'>
          <img class='titleLogo' src='~@/assets/logo.png' />
          <h1 class='title'>
            Eniverse
          </h1>
          <h2 class='subtitle'>
            Into the next generation
          </h2>
        </div>
      </div>
      <div class='hero-footer' slot='content'>
        <button class='button is-large is-white is-outlined' v-scroll-to="{ element: '#what', duration: 1000 }">
          <span class='icon is-large'>
            <i class='fa fa-angle-down'></i>
          </span>
        </button>
      </div>
  </page>
</template>

<script>
  import Page from '../Page';

  export default {
    name: 'hero',
    components: {
      Page,
    },
  };
</script>

<style lang='scss' scoped>
  .hero {
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.8)
    ), url('~@/assets/headback.png') no-repeat center center;
    background-attachment: fixed;
    background-size: cover;
    text-align: center;
  }

  .hero-body {
    font-family: Montserrat;
    text-transform: uppercase;
  }

  .is-hidden-mobile {
    .title {
      display: inline-block;
      font-size: 7rem;
      color: white;
    }
    .subtitle {
      color: grey;
    }
    .titleLogo {
      position: relative;
      top: 2rem;
      right: 2rem;
    }
    h2 {
      margin-left: 27rem;
    }
  }

  .is-hidden-desktop {
    .title {
      font-size: 2.5rem;
      color: white;
    }
    .subtitle {
      font-size: 1rem;
      color: grey;
    }
  }

  button {
    border-radius: 50%;
    margin-bottom: 2rem;
  }
</style>
