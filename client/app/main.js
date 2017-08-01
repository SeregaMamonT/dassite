import Vue from 'vue';
import Vuex from 'vuex';

import AppComponent from './components/app-component/app-component.vue';

import tracksStore from './stores/tracksStore.js'
import currentTrackStore from './stores/currentTrackStore.js'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    tracks: tracksStore,
    currentTrack: currentTrackStore
  },

  getters: {
    getCurrentTrack(state) {
      return state.currentTrack.data;
    },

    getCurrentTrackSource(state, { getCurrentTrack }) {
      let currentTrack = getCurrentTrack;
      return currentTrack && currentTrack.source;
    },

    getAllTracks(state) {
      return state.tracks.data;
    },

    getTrackById(state, { getAllTracks }) {
      return (trackId) => getAllTracks.find((track) => track.id == trackId);
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