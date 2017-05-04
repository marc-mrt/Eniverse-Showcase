<template>
  <div class='column is-3'>
    <div class='card'>
      <div class='card-image'>
        <figure class='image is-1by1'>
          <img :src='getImage()' alt='Image'>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'partner',
    props: {
      image: {
        type: String,
        required: true,
      },
    },
    methods: {
      getImage() {
        return `/static/partners/${this.image}`;
      },
    },
  };
</script>

<style lang='scss' scoped>
  .card {
    background: rgba(0, 0, 0, 0);
    &:hover {
      background-color: rgba(0, 0, 0, 0.25);
      -webkit-transition: background-color 500ms linear;
      -ms-transition: background-color 500ms linear;
      transition: background-color 500ms linear;
    }
  }
</style>
