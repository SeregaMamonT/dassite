import Vue from 'vue';
import Vuex from 'vuex';

import AppComponent from './components/app-component/app-component.vue';

import api from './api/services.js'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tracks: [],
    currentTrack: null
  },

  mutations: {
    loadTracks(state, tracks) {
      state.tracks = tracks;
    },

    addTrack(state) {
      state.tracks = [...state.tracks, { artist: "Muse", title: "Supermassive Black Hole" }];
    },

    setCurrentTrack(state, track) {
      state.currentTrack = track;
    }
  },


  actions: {
    loadTracks(context) {
      api.tracks.loadAll((tracks) => {
        context.commit('loadTracks', tracks);
      });
    },

    startTrack(context, trackId) {
      const track = context.state.tracks.find((track) => track.id == trackId);

      api.tracks.loadTrack(trackId, (source) => {
        const currTrack = { ...track, source: source };
        context.commit('setCurrentTrack', currTrack);
      });
    }
  },


  getters: {
    getCurrentTrack(state) {
      return state.currentTrack;
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