<template>
  <div class="root">
    <div class="artist">{{ artist }}</div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default Vue.extend({
    props: ['artist', 'title'],
  });
</script>

<style scoped>
  .root {
    margin: 0;
    padding: 0;
    height: 30px;
    position: relative;
  }

  .root:hover {
    border: 2px green solid;
  }

  .artist, .title {
    float: left;
    margin: 0;
    width: 50%;
  }
</style>