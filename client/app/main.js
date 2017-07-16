import Vue from 'vue';
import Vuex from 'vuex';
import AppComponent from './components/app-component/app-component.vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tracks: []
  },

  mutations: {
    loadTracks(state, tracks) {
      state.tracks = tracks;
    },

    addTrack(state) {
      state.tracks = [...state.tracks, { artist: "Muse", title: "Supermassive Black Hole" }];
    }
  }
});

new Vue({
  el: '#app',

  components: {
    'app-component': AppComponent
  },

  store
});