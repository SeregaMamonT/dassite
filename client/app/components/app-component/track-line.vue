<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="root"
       v-on:click="onClick(track)"
  >
    <div class="number">{{ index }}</div>
    <div class="artist">{{ track.artist }}</div>
    <div class="title">{{ track.title }}</div>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default Vue.extend({

    props: ['track', 'index'],

    methods: {
      onClick() {
        this.$store.dispatch('track/startTrack', this.track.id);
      }
    }
  });
</script>

<style scoped>
  .root {
    overflow: visible;
    height: 30px;
  }

  .root:hover {
    border: 2px green solid;
  }

  .number {
    width: 30px;
    display: inline-block;
  }

  .artist {
    width: 300px;
    display: inline-block;
  }

  .title {
    width: 300px;
    display: inline-block;
  }
</style>