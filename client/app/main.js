import Vue from 'vue';
import Vuex from 'vuex';

import AppComponent from './components/app-component/app-component.vue';

import api from './api/services.js'

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
    },
  },


  actions: {
    loadTracks(context) {
      api.tracks.loadAll((tracks) => {
        context.commit('loadTracks', tracks);
      });
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