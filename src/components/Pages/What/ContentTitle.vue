<template>
  <span class='content has-text-centered'>
    <h2 class='title' style='text-transform: uppercase;'>
      <slot></slot>
    </h2>
  </span>
</template>

<script>
  export default {
    name: 'content-title',
  };
</script>

<style scoped>
  .title {
    font-family: 'Anton', sans-serif;
    font-size: 2rem;
    letter-spacing: 1px;
  }

  h2 {
    margin-top: 2rem;
  }
</style>
