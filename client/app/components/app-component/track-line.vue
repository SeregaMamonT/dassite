<template>
  <div>
    <p>{{ artist }}</p>
    <p>{{ title }}</p>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default Vue.extend({
    props: ['artist', 'title'],
  });
</script>

<style scoped>
  div {
    border: 1px green solid;
    margin: 0;
    padding: 0;
  }

  p {
    display: inline-block;
    margin: 3px;
  }
</style>