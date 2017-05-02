<template>
  <div class='column is-4 details'>
    <div class='column is-8 is-offset-2 tile notification is-primary'>
      <span class='icon is-large'>
        <slot name='icon'></slot>
      </span>
    </div>
    <span class='content has-text-centered'>
      <h3 class='title'>
        <slot name='title'></slot>
      </h3>
      <p class='desc'>
        <slot name='desc'></slot>
      </p>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'details',
  };
</script>

<style lang='scss' scoped>
  .details {
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      .notification {
        background-color: black;
      }
      .title {
        color: black;
      }
      .desc {
        color: black;
      }
      .icon {
        &:after {
          color: black;
        }
      }
    }
  }
</style>

<style scoped>
  .title {
    font-family: 'Anton', sans-serif;
    color: rgb(30, 53, 138);
    letter-spacing: 1px;
    margin-top: -10px;
    text-transform: uppercase;
  }

  .desc {
    text-align: center;
    font-size: 1.2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    color: white;
  }

  .tile {
    height: 10vh;
  }

  .icon {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .icon::after {
    content: "";
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid;
    left: calc(50% - 10px);
    color: rgb(30, 53, 138);
    top: 10vh;
  }
</style>
