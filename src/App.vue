<template>
  <div id='app'>
    <Hero id='hero' />
    <What id='what' />
    <Partners id='partners' />
  </div>
</template>

<script>
  import Hero from './components/Pages/Hero';
  import What from './components/Pages/What';
  import Partners from './components/Pages/Partners';

  export default {
    name: 'app',
    components: {
      Hero,
      What,
      Partners,
    },
  };
</script>

<style lang='sass'>
  @import url('https://fonts.googleapis.com/css?family=Raleway')
  @import url(https://fonts.googleapis.com/css?family=Montserrat:700)
  @import url('https://fonts.googleapis.com/css?family=Anton')

  $family-primary: 'Raleway', sans-serif
  $primary: rgb(30, 53, 138)

  // Import Bulma and Buefy styles
  @import "~bulma"
  @import "~buefy/src/scss/buefy"
  @import "~animate.css"
</style>
