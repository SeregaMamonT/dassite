<template>
  <div>
    <track-line v-for="(track, index) in tracks"
                v-bind:track="track"
                v-bind:index="index + 1"
                v-bind:key="index"
    ></track-line>
  </div>

</template>

<script>
  import Vue from 'vue';

  import TrackLine from './track-line.vue';

  export default Vue.extend({

    components: {
      'track-line': TrackLine
    },

    props: ['tracks']
  });

</script>

<style>

</style>