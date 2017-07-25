<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="root"
       v-on:click="onClick(id)"
  >
    <div class="number">{{ id }}</div>
    <div class="artist">{{ artist }}</div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import api from '../../api/services'

  export default Vue.extend({
    props: ['id', 'artist', 'title'],

    methods: {
      onClick(id) {
        api.tracks.loadTrack(id, (track) => {
          console.log(track);
        });
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
  }

  .title {
    width: 300px;
  }
</style>