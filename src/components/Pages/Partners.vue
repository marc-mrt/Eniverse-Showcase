<template>
  <page class='partners' hasTitle>
    <span slot='title'>Our <span class='titleColor'>partners</span></span>
    <span slot='subtitle' class='weight'>These are some of the organisations that already trust us.</span>
    <div slot='content'>
      <div class='grid column is-8 is-offset-2'>
        <div class='columns is-centered is-multiline'>
          <partner v-for='item in this.partners' :key='item.img' :image='item.img' :content='item.content' />
        </div>
      </div>
      <button slot='content' class='button is-large is-primary is-outlined' v-scroll-to="{ element: '#hero', duration: 1000 }">
        <span class='icon is-large'>
          <i class='fa fa-angle-down'></i>
        </span>
      </button>
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
    methods: {
      isFirst(img) {
        return img === 'twitch.png';
      },
    },
    data() {
      return {
        partners: [
          {
            img: 'spotify.png',
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
          {
            img: 'twitch.png',
          },
          {
            img: 'deliveroo.png',
          },
          {
            img: 'monster.png',
          },
        ],
      };
    },
  };
</script>

<style scoped>
  .partners {
    padding-left: 3rem;
    padding-right: 3rem;
    text-align: center;
    background: url('~@/assets/interback2.png');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .grid {
    margin-top: 1rem;
  }

  .titleColor {
    color: rgb(30, 53, 138);
  }

  button {
    border-radius: 50%;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }

  .weight {
    font-weight: 700;
  }
</style>
