<template>
  <div class='column is-3'>
    <div class='card'>
      <div class='card-image'>
        <figure class='image is-4by3'>
          <img :src='getImage()' alt='Image'>
        </figure>
      </div>
      <div class='card-content'>
        {{ this.content }}
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
      content: {
        type: String,
      },
    },
    methods: {
      getImage() {
        return `../../../assets/${this.image}`;
      },
    },
  };
</script>

<style scoped>
</style>
