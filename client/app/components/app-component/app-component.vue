<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <h3>{{ headerText }}</h3>
    <track-list :tracks="tracks"></track-list>
    <player></player>
    <button @click="addTrack"></button>
  </div>
</template>

<script>
  import Vue from 'vue';

  import TrackList from './track-list.vue';
  import Player from './player.vue';

  export default Vue.extend({

    components: {
      'track-list': TrackList,
      'player': Player
    },


    created() {
      this.$store.dispatch('loadTracks');
    },


    methods: {
      addTrack() {
        this.$store.commit('addTrack');
      }
    },


    computed: {
      tracks() {
        return this.$store.state.tracks.value;
      },

      headerText() {
        return this.tracks.length == 0 ? 'Loading tracks...' : 'Your tracks';
      }
    }

  });
</script>

<style scoped>
  h3 {
    color: green;
  }

  button {
    width: 80px;
    height: 20px;
    position: absolute;
    bottom: 0;
  }
</style>