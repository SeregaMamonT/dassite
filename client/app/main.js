import Vue from 'vue';
import Vuex from 'vuex';

import AppComponent from './components/app-component.vue';

import tracksStore from './stores/tracksStore.js'
import currentTrackStore from './stores/currentTrackStore.js'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    tracks: tracksStore,
    track: currentTrackStore
  }
});

new Vue({
  el: '#app',

  components: {
    'app-component': AppComponent
  },

  store
});