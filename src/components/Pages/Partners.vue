<template>
  <page class='partners' :hasTitle='true'>
    <span slot='title'>Our <span class='titleColor'>partners</span></span>
    <div slot='content' class='main'>
      <div class='columns'>
        <partner v-for='item in this.firstRow' :key='item.img' :image='item.img' :content='item.content'/>
      </div>
    </div>
  </page>
</template>

<script>
  import Page from '../Page';
  import Partner from './Partners/Partner';

  export default {
    name: 'partners',
    components: {
      Page,
      Partner,
    },
    data() {
      return {
        firstRow: [
          {
            img: 'spotify.png',
            content: 'prout',
          },
          {
            img: 'uber.png',
          },
          {
            img: 'paypal.png',
          },
          {
            img: 'tf1.png',
          },
        ],
        secondRow: [
          {
            img: 'twitch.png',
          },
          {
            img: 'monster.png',
          },
          {
            img: 'deliveroo.png',
          },
        ],
      };
    },
  };
</script>

<style scoped>
  .partners {
    text-align: center;
  }

  .titleColor {
    color: rgb(30, 53, 138);
  }
</style>
