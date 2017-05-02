<template>
  <section class='page section'>
    <span v-if='this.hasTitle' class='super content has-text-centered'>
      <h1 class='title'>
        <slot name='title' />
      </h1>
      <h5 class='subtitle'>
        <slot name='subtitle' />
      </h5>
    </span>
    <slot name='content' />
  </section>
</template>

<script>
  export default {
    name: 'page',
    props: {
      hasTitle: {
        type: Boolean,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .page {
    width: 100%;
    padding-top: 5rem;
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
