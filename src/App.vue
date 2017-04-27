<template>
  <div id='app'>
    <Hero id='hero'/>
  </div>
</template>

<script>
  import Hero from './components/Hero';

  export default {
    name: 'app',
    components: {
      Hero,
    },
  };
</script>

<style>
  @import '~animate.css';
</style>

<style lang='sass'>
  @import url('https://fonts.googleapis.com/css?family=Raleway')
  @import url(https://fonts.googleapis.com/css?family=Montserrat:700)
  @import url('https://fonts.googleapis.com/css?family=Anton')

  $family-primary: 'Raleway', sans-serif
  $primary: rgb(30, 53, 138)

  // Import Bulma and Buefy styles
  @import "~bulma"
  @import "~buefy/src/scss/buefy"
</style>
