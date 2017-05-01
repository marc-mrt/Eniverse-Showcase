<template>
  <div class='whatVue'>
    <span class='super content has-text-centered'>
      <h1 class='title'>We connect <span class='tColor'>brands</span> with <span class='tColor'>millenials</span></h1>
      <h5 class='subtitle'>eSports are an innovative communication medium to build deep emotional bonding between a brand and its audience.</h5>
    </span>
    <whatContent></whatContent>
  </div>
</template>

<script>
  import WhatContent from './What/Content';

  export default {
    name: 'what',
    components: {
      WhatContent,
    },
  };
</script>

<style scoped>
  .whatVue {
    height: 100vh;
    width: 100%;
    padding: 2rem;
  }

  .tColor {
    color: rgb(30, 53, 138);
  }

  .super .title {
    font-size: 3rem;
    font-family: 'Anton', sans-serif;
    text-transform: uppercase;
    margin-bottom: 3rem;
  }

  .super .subtitle {
    font-size: 1rem;
    font-family: 'Raleway', sans-serif;
    letter-spacing: 1px;
    margin-bottom: 5rem;
  }

  .super .subtitle::after {
    content: '';
    width: 40px;
    height: 3px;
    background-color: #2f508e;
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top: 8px;
  }
</style>
