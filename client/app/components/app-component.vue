<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <h3>{{ headerText }}</h3>
    <track-filter></track-filter>
    <track-list v-bind:tracks="tracks"></track-list>
    <player></player>

    <div class="footer">
      <button v-on:click="addTrack"></button>
      <a href="admin.html">admin</a>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapGetters } from 'vuex';

  import TrackList from './track-list.vue';
  import Player from './player.vue';
  import TrackFilter from './track-filter.vue';

  export default Vue.extend({

    components: {
      'track-list': TrackList,
      'player': Player,
      'track-filter': TrackFilter
    },


    created() {
      this.$store.dispatch('tracks/loadTracks');
    },


    methods: {
      addTrack() {
        this.$store.commit('tracks/addTrack');
      }
    },


    computed: {
      ...mapGetters({
        tracks: "tracks/getFilteredTracks"
      }),

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
  }

  .footer {
    position: absolute;
    bottom: 0;
  }
</style>