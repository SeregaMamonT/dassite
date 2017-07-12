<template>
<ul>
  <p>{{ tracks.length == 0 ? "Loading tracks..." : "Your tracks" }}</p>
  <li v-for="track in tracks">
	{{ track }}
  </li>
</ul>
</template>

<script>
import Vue from 'vue';
import fetch from 'fetch-everywhere';

export default Vue.extend({

  data() {
    return {
      tracks: []
    }
  },


  created() {
    this.getData('/rest/tracks/all', (tracks) => {
      this.tracks = tracks;
    });
  },


  methods: {
    getData(url, callback) {
      fetch(url)
      .then(resp => resp.json())
      .then(json => callback(json))
      .catch((e) => console.log(e));
    }
  }

});
</script>

<style scoped>
ul p {
    color: green;
}
</style>