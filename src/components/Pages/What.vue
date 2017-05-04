<template>
  <page class='what' hasTitle>
    <span slot='title'>We connect <span class='titleColor'>brands</span> with <span class='titleColor'>millenials</span></span>
    <span slot='subtitle' class='weight'>eSports are an innovative communication medium to build deep emotional bonding between a brand and its audience.</span>
    <whatContent slot='content'></whatContent>
    <button slot='content' class='button is-large is-primary is-outlined' v-scroll-to="{ element: '#partners', duration: 1000 }">
      <span class='icon is-large'>
        <i class='fa fa-angle-down'></i>
      </span>
    </button>
  </page>
</template>

<script>
  import Page from '../Page';
  import WhatContent from './What/Content';

  export default {
    name: 'what',
    components: {
      Page,
      WhatContent,
    },
  };
</script>

<style scoped>
  .what {
    padding-left: 3rem;
    padding-right: 3rem;
    text-align: center;
    background: white;
    background-size: cover;
  }

  .titleColor {
    color: rgb(30, 53, 138);
  }

  button {
    border-radius: 50%;
    margin-bottom: 3rem;
  }

  .weight {
    font-weight: 700;
  }
</style>
