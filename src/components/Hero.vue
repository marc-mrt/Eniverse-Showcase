<template>
  <section class='hero is-fullheight'>
    <div class='hero-body'>
      <div class='container is-hidden-mobile'>
        <img class='titleLogo' src='../assets/logo.png' />
        <h1 class='title'>
          Eniverse
        </h1>
        <h2 class='subtitle'>
          Into the next generation
        </h2>
      </div>
      <div class='container is-hidden-desktop'>
        <img class='titleLogo' src='../assets/logo.png' />
        <h1 class='title'>
          Eniverse
        </h1>
        <h2 class='subtitle'>
          Into the next generation
        </h2>
      </div>
    </div>
    <div class='hero-footer'>
      <button class='button is-large is-white is-outlined'>
        <b-icon icon='keyboard_arrow_down' size='is-large' v-scroll-to="'#what'" />
      </button>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'hero',
  };
</script>

<style lang='scss' scoped>
  .hero {
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.8)
    ), url('../assets/headback.png') no-repeat center center;
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
    h2 {
      margin-left: 27rem;
    }
  }

  .is-hidden-desktop {
    .title {
      font-size: 3rem;
      color: white;
    }
    .subtitle {
      font-size: 1rem;
      color: grey;
    }
  }

  button {
    border-radius: 50%;
    margin-bottom: 3rem;
  }
</style>
