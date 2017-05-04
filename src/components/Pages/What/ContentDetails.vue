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
    -webkit-transition: background-color 500ms linear;
    -ms-transition: background-color 500ms linear;
    transition: background-color 500ms linear;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      -webkit-transition: color 500ms linear;
      -ms-transition: color 500ms linear;
      transition: color 500ms linear;
      .notification {
        background-color: black;
        -webkit-transition: background-color 500ms linear;
        -ms-transition: background-color 500ms linear;
        transition: background-color 500ms linear;
      }
      .title {
        color: black;
        -webkit-transition: color 500ms linear;
        -ms-transition: color 500ms linear;
        transition: color 500ms linear;
      }
      .desc {
        color: black;
        -webkit-transition: color 500ms linear;
        -ms-transition: color 500ms linear;
        transition: color 500ms linear;
      }
      .icon {
        &:after {
          color: black;
          -webkit-transition: color 500ms linear;
          -ms-transition: color 500ms linear;
          transition: color 500ms linear;
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
    color: rgba(0, 0, 0, 0);
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
